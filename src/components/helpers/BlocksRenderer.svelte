<script>
  import { onDestroy, onMount } from 'svelte'
  import {
    onCloudCannonChanges,
    stopCloudCannonChanges,
  } from '@cloudcannon/svelte-connector'

  export let pageData
  export let keys
  export let dataBinding

  onMount(async () => {
    onCloudCannonChanges((newProps) => {
      pageData = newProps
    })
  })
  onDestroy(async () => {
    stopCloudCannonChanges()
  })

  const components = import.meta.glob('../blocks/**/*.svelte', {
    eager: true,
  })

  function getComponent(block) {
    const component =
      components[`../blocks/${block._component}.svelte`]?.default
    if (component) return component
    console.error(`Component not found by BlocksRenderer: ${block._component}`)
  }
</script>

{#if Array.isArray(pageData.blocks)}
  {#each pageData.blocks as block, i}
    <svelte:component
      this={getComponent(block)}
      content={block}
      data-cms-bind={dataBinding ? `${dataBinding}[${i}]` : undefined}
    />
  {/each}
{:else if keys}
  {#each keys as key}
    <svelte:component
      this={getComponent(pageData.blocks[key])}
      content={pageData.blocks[key]}
      data-cms-bind={dataBinding ? `#blocks.${key}` : undefined}
    />
  {/each}
{:else}
  {#each Object.entries(pageData.blocks) as [key, block]}
    <svelte:component
      this={getComponent(block)}
      content={block}
      data-cms-bind={dataBinding ? `#blocks.${key}` : undefined}
    />
  {/each}
{/if}
