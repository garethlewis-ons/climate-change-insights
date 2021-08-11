<script>
    export let title;
</script>

<div class="tile">
  <h1>{title}</h1>

  <div class="dashboard-chart">

  </div>
</div>

<style>
    .tile {
        border: 2px solid black;
        box-sizing: border-box;
        height: 292px;
    }

    h1 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #ffffff;
        background: black;
        padding: 8px;
    }

    .dashboard-chart {
		height: 224px;
        padding: 16px;
		box-sizing: border-box;
	}
</style>