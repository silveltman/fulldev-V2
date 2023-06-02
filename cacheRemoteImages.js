// --------------------------
// A little script to save all external images locally and update the markdown files
// --------------------------

import { promises as fsPromises } from 'fs'
import fs from 'fs'
import glob from 'glob'
import crypto from 'crypto'

const MARKDOWN_FILES = glob.sync('./src/content/**/*.md')
const FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'avif']
const PUBLIC_OUTPUT_DIR = 'remote-image-cache'

// Get markdown content as string
function getMarkdownContent(filePath) {
  return fs.readFileSync(filePath, 'utf-8')
}

// Check if url has a file extension sepcified in FILE_EXTENSIONS
function hasFileExtension(url) {
  return FILE_EXTENSIONS.some((extension) =>
    url.toLowerCase().includes(`.${extension.toLowerCase()}`)
  )
}

// Get file extension from url
function getFileExtension(url) {
  return FILE_EXTENSIONS.find((extension) =>
    url.toLowerCase().includes(`.${extension.toLowerCase()}`)
  )
}

// Extract all external urls from markdown content
function extractImageUrls(contentString) {
  const regex = /(https?:\/\/[^\s]+)/g
  const matches = contentString.matchAll(regex)
  const urls = [...matches].map((match) => match[1])
  const imageUrls = urls.filter((url) => hasFileExtension(url))
  return imageUrls
}

// Download image from url and save to local filesystem
async function downloadImage(url) {
  const extension = getFileExtension(url)
  const randomString = crypto.randomBytes(16).toString('hex')
  const filename = `${randomString}.${extension}`
  const outputPath = `./public/${PUBLIC_OUTPUT_DIR}/${filename}`

  const response = await fetch(url)
  const blob = await response.blob()
  const arrayBuffer = await blob.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  await fsPromises.writeFile(outputPath, buffer)
  return `/${PUBLIC_OUTPUT_DIR}/${filename}`
}

// Get markdown content, extract image urls, download images and update markdown content
async function runAll(filePath) {
  const content = getMarkdownContent(filePath)
  const urls = extractImageUrls(content)
  let newContent = content
  for (const url of urls) {
    const newUrl = await downloadImage(url)
    newContent = newContent.replace(url, newUrl)
  }
  fs.writeFileSync(filePath, newContent)
}

// Run script for all markdown files
MARKDOWN_FILES.forEach((filePath) => {
  runAll(filePath)
})
