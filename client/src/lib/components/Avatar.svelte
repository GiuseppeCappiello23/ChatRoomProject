<script>
    import avatarSvg from "$lib/avatar2.svg"
    
    const logout = () => {
        window.location = "/logout"
    }
</script>


<div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="avatar">
        <div class="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
            <img src="{avatarSvg}" />
        </div>
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <li on:click={logout}><a class=" text-primary font-bold">Log Out</a></li>
    </ul>
  </div>

