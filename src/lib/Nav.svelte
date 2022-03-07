<script>
  import defaultMenus from '../constants/menus';
  const appName = "HIPPOCRADES";
  const menus = defaultMenus;
</script>

<div class="navbar hidden md:inline">
  <div class="container mx-auto px-6 flex items-center justify-between">
    <div class="flex-1">
      <a
        href="/"
        class="btn btn-ghost normal-case text-md md:text-xl"
        ><span class="hippocrades-logo">{appName}</span><span style="font-size: 14px;" class="font-normal">.ORG</span></a
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        {#each menus as menu}
          <li>
            <a
              href="{menu.link}"
              class="btn md:btn-md normal-case {menu.extraClasses}"
            >
              {menu.title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<div class="navbar visible md:hidden lg:hidden">
  <div class="container mx-auto px-6 flex items-center justify-between">
    <div class="flex-1">
      <a
        href="/"
        class="btn btn-ghost normal-case text-md lg:text-xl text-primary hippocrades-logo"
        >{appName}</a
      >
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <span tabindex="0" class="btn btn-primary btn-outline btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </span>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60"
        >
          {#each menus as menu}
            <li>
              <a
                href="{menu.link}"
                target="_blank"
                class="btn md:btn-md normal-case mb-2 {menu.extraClasses}"
              >
                {menu.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
