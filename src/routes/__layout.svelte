<script>
    import './../styles/reset.css';
    import './../styles/globals.css';
    import Header from '$lib/header/Header.svelte';
    import Navigation from '$lib/Navigation.svelte';
    import GlobalSearch from '$lib/GlobalSearch.svelte';
</script>

<Header />
<Navigation />
<GlobalSearch />
  
<main>
    <slot></slot>
</main>

  