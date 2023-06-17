<script lang="ts">
  import site from '@data/site'
  import header from '@data/header.yml'

  import { Button, Link, Logo, Navbar } from 'fulldev-ui'
</script>

<Navbar class=" max-sm:hidden">
  <Logo
    src={site.logo}
    alt="Logo Fulldev"
  />
  {#each header.links as link, i}
    <Link
      {...link}
      class="{i == 0 && 'ml-auto'} light"
    />
  {/each}
  <Button
    class=" py-sm"
    variant="ringed"
    text="Contact"
    href="/contact"
  />
</Navbar>
