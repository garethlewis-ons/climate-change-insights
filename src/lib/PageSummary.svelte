<script>
    import Breadcrumbs from "./Breadcrumbs.svelte";

    export let breadcrumbs;
    export let heading;
    export let subhead;
    export let date;
</script>

<div class="pagesummary">
    <div class="wrapper">
        <Breadcrumbs />
        <h1>{ heading }</h1>
        {#if subhead}
            <h2>{ subhead }</h2>
        {/if}
        <time>{ date }</time>
    </div>
</div>

<style>
    .pagesummary {
        background: #EAEAEA;
        color: #323132;
        margin-bottom: 32px;
        padding: 24px 0 32px;
    }

    h1 {
        margin-bottom: 16px;
    }

    h2 {
        font-weight: 400;
        margin-bottom: 24px;
        max-width: 720px;
    }

    time {
        font-size: 16px;
        line-height: 24px;
    }
</style>