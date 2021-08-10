<script>
    export let path;
</script>

<nav>
    <ul>
        <li><a href=".">Home</a></li>
        <li><a href=".">People, population and community</a></li>
        <li>Climate change insights</li>
    </ul>
</nav>

<style>
    nav {
        margin-bottom: 24px;
    }

    li {
        font-size: 14px;
        line-height: 16px;
        display: inline-block;
    }

    li::after {
        content: ">";
        margin: 0 8px;
    }

    li:last-child::after {
        content: "";
        margin: 0;
    }
</style>