const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/climate-weather.svelte"),
	() => import("../../../src/routes/Datasetinfo1.svelte"),
	() => import("../../../src/routes/mitigation.svelte"),
	() => import("../../../src/routes/Hcharts01.svelte"),
	() => import("../../../src/routes/emissions.svelte"),
	() => import("../../../src/routes/Hnochart.svelte"),
	() => import("../../../src/routes/adaption.svelte"),
	() => import("../../../src/routes/Hchart2.svelte"),
	() => import("../../../src/routes/Hchart3.svelte"),
	() => import("../../../src/routes/Hchart4.svelte"),
	() => import("../../../src/routes/Hchart5.svelte"),
	() => import("../../../src/routes/drivers.svelte"),
	() => import("../../../src/routes/impacts.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/climate-weather.svelte
	[/^\/climate-weather\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/Datasetinfo1.svelte
	[/^\/Datasetinfo1\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/mitigation.svelte
	[/^\/mitigation\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/Hcharts01.svelte
	[/^\/Hcharts01\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/emissions.svelte
	[/^\/emissions\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/Hnochart.svelte
	[/^\/Hnochart\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/adaption.svelte
	[/^\/adaption\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/Hchart2.svelte
	[/^\/Hchart2\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/Hchart3.svelte
	[/^\/Hchart3\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/Hchart4.svelte
	[/^\/Hchart4\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/Hchart5.svelte
	[/^\/Hchart5\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/drivers.svelte
	[/^\/drivers\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/impacts.svelte
	[/^\/impacts\/?$/, [c[0], c[15]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];