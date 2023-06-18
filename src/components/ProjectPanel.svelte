<script lang="ts">
  import { Panel, Ratio, Image, Heading, Text } from 'fulldev-ui'

  export let content: any
  export let ratio: number
</script>

<Panel
  as="a"
  href={content.href}
  target="_blank"
  class="group !p-0 shadow-2xl large"
>
  <Ratio {ratio}>
    <Image
      class="h-full w-full object-cover transition-transform group-hover:scale-105"
      {...content.image}
    />
  </Ratio>
  <div
    class="absolute inset-0 h-full w-full bg-black/60 transition-opacity group-hover:opacity-70"
  />
  <div
    class="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity group-hover:opacity-75"
  />
  <Heading
    secondary
    class=" absolute bottom-md left-md"
    text={content.heading}
  />
</Panel>
