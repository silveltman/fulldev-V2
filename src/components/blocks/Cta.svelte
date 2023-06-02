<script lang="ts">
  import { Section, Container, Highlight, Split, Button, Box } from 'fulldev-ui'

  export let content: any
</script>

<Section class="dark">
  <Container>
    <Box>
      <Highlight center>
        <span class="text-sm text-base-11">Lorem ipsum</span>
        <h2 class="dark text-base-12">{content.heading}</h2>
        <p class="dark text-base-12">{content.textarea}</p>
        <svelte:fragment slot="footer">
          <Button
            class="dark-indigo"
            variant="solid"
            {...content.button_1}
          />
          <Button
            class="dark-indigo"
            {...content.button_1}
          />
        </svelte:fragment>
      </Highlight>
    </Box>
  </Container>
</Section>
