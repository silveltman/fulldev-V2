<script>
  import { Container, Section, Prose } from 'fulldev-ui'
</script>

<Section {...$$restProps}>
  <Container>
    <Prose class="mx-auto">
      <slot />
    </Prose>
  </Container>
</Section>
