<script lang="ts">
  import site from '@data/site'
  import header from '@data/header.yml'

  import { Button, Drawer, Link, Logo, Navbar } from 'fulldev-ui'
</script>

<Navbar class="">
  <Logo
    src={site.logo}
    alt="Logo Fulldev"
  />
  {#each header.links as link, i}
    <Link
      {...link}
      class="{i == 0 && 'ml-auto'} light hidden md:block"
    />
  {/each}
  <Button
    class="py-sm max-md:ml-auto"
    variant="ringed"
    text="Contact"
    href="/contact"
  />
  <Drawer
    position="top"
    class="md:hidden"
  >
    <div class="flex flex-col items-center gap-md">
      {#each header.links as link, i}
        <Link {...link} />
      {/each}
      <Button
        class="light-primary"
        variant="solid"
        text="Contact"
        href="/contact"
      />
    </div>
  </Drawer>
</Navbar>
