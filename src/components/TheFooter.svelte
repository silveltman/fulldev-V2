<script lang="ts">
  import site from '@data/site'
  import footer from '@data/footer.yml'

  import { Social, Link, Logo, Section, Container, Stack } from 'fulldev-ui'
</script>

<Section class="mt-auto border-t border-base-6 bg-base-2 py-0">
  <Container class="flex flex-col items-center">
    <div class="mx-auto flex flex-col items-center gap-md py-xl">
      <Logo
        class="mx-auto"
        src={site.logo}
        alt="Logo Fulldev"
      />
      <div class="flex items-center justify-center gap-md">
        {#each footer.links as link, i}
          <Link {...link} />
        {/each}
      </div>
      <div class="light-primary flex items-center justify-center gap-md">
        {#each footer.socials as social, i}
          <Social {...social} />
        {/each}
      </div>
    </div>
    <div class="flex items-center justify-center gap-md pb-md">
      <Link
        class="text-sm"
        text="Algemene voorwaarden"
        href="/algemene-voorwaarden"
      />
      <Link
        class="text-sm"
        text="Privacyverklaring"
        href="/privacyverklaring"
      />
    </div>
  </Container>
</Section>
