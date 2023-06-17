<script lang="ts">
  import { Container, Stack, Section, Heading, Text, Icon } from 'fulldev-ui'
  // import { IconCircleCheck } from '@tabler/icons-svelte'

  export let content: any
</script>

<Section>
  <Container>
    <Stack row>
      {#each content.cols as col, i}
        <div class="flex items-start gap-sm">
          <Icon
            size={24}
            name={col.icon}
            class="light-primary mr-sm mt-xs shrink-0 text-base-9"
          />
          <div>
            <Heading
              class="inline"
              as="h5"
              text={col.heading}
            />
            <Text
              class="inline !text-base-11"
              text={col.textarea}
            />
          </div>
        </div>
      {/each}
    </Stack>
  </Container>
</Section>
