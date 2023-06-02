<script lang="ts">
  import ProjectPanel from '@components/ProjectPanel.svelte'
  import {
    Section,
    Container,
    Highlight,
    Flow,
    Button,
    Image,
    Text,
    Heading,
    Panel,
    Ratio,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section>
  <Container>
    <Flow class="dark !gap-sm large">
      <Flow
        class="!gap-sm"
        row
      >
        <ProjectPanel
          ratio={3 / 2}
          content={content.project_1}
        />
        <ProjectPanel
          ratio={3 / 2}
          content={content.project_2}
        />
      </Flow>
      <ProjectPanel
        ratio={3 / 1}
        content={content.project_3}
      />
    </Flow>
  </Container>
</Section>
