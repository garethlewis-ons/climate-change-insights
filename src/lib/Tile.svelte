<script>
    import * as Pancake from '@sveltejs/pancake';

    //export let topic;
    export let title;
    //export let lastUpdated;
    //export let chart;
    //export let size;
    //export let link;

    const points = [
        { x: 1990, y: 2891 },
        { x: 1991, y: 2930 },
        { x: 1992, y: 2846 },
        { x: 1993, y: 2772 },
        { x: 1994, y: 2749 },
        { x: 1995, y: 2709 },
        { x: 1996, y: 2807 },
        { x: 1997, y: 2674 },
        { x: 1998, y: 2699 },
        { x: 1999, y: 2667 },
        { x: 2000, y: 2701 },
        { x: 2001, y: 2742 },
        { x: 2002, y: 2656 },
        { x: 2003, y: 2712 },
        { x: 2004, y: 2714 },
        { x: 2005, y: 2696 },
        { x: 2006, y: 2682 },
        { x: 2007, y: 2637 },
        { x: 2008, y: 2567 },
        { x: 2009, y: 2320 },
        { x: 2010, y: 2409 },
        { x: 2011, y: 2200 },
        { x: 2012, y: 2291 },
        { x: 2013, y: 2242 },
        { x: 2014, y: 2047 },
        { x: 2015, y: 1965 },
        { x: 2016, y: 1847 },
        { x: 2017, y: 1787 },
        { x: 2018, y: 1762 },
        { x: 2019, y: 1701 }
    ]
</script>

<div class="tile">
  <h1>{title}</h1>

  <div class="dashboard-chart">
    <Pancake.Chart x1={1990} x2={2019} y1={1500} y2={3000}>
      <Pancake.Box x2={10} y2={100}>
        <div class="axes"></div>
      </Pancake.Box>
      
      <Pancake.Grid vertical count={5} let:value>
        <span class="x label">{value}</span>
      </Pancake.Grid>
  
      <Pancake.Grid horizontal count={0} let:value let:first>
        <span class="y label">{value}</span>
      </Pancake.Grid>
  
      <Pancake.Svg>
        <Pancake.SvgLine data={points} let:d>
          <path class="data" {d}/>
        </Pancake.SvgLine>
      </Pancake.Svg>
    </Pancake.Chart>
  </div>
  <!-- <p>Latest data provided on {lastUpdated}</p> -->
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
	
	.axes {
		width: 100%;
		height: 100%;
		border-left: 1px solid black;
		border-bottom: 1px solid black;
	}

    .label {
        font-size: 10px;
        color: #6B7276;
    }

	.y.label {
		position: absolute;
		left: -2.5em;
		width: 2em;
		text-align: right;
		bottom: -0.5em;
	}

	.x.label {
		position: absolute;
		width: 4em;
		left: -2em;
		bottom: -22px;
		font-family: sans-serif;
		text-align: center;
	}

	path.data {
		stroke: #383F43;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 2px;
		fill: none;
	}
</style>