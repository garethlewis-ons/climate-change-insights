<script>
    import PageSummary from '$lib/PageSummary.svelte'
</script>

<PageSummary
    heading = "Climate change latest insights: Emissions"
    date = "10 August 2021"
/>

<article class="wrapper">
    <a href=".">Back to overview</a>

    <h2>Explore by topic</h2>
    
    <nav class="topics">
        <a href="climate-weather">Climate and Weather</a>
        <a href="emissions">Emissions</a>
        <a href="drivers">Drivers</a>
        <a href="impacts">Impacts</a>
        <a href="mitigation">Mitigation</a>
        <a href="adaption">Adaption</a>
    </nav>
    
    <section>
        <h2>Climate change headline one</h2>
        
        <h3>Subheadline one</h3>
        
        <p>
            Donec tortor sem, tristique quis eros nec, imperdiet consequat tellus. Mauris ipsum risus, lacinia eget risus vel, imperdiet volutpat nisi. Cras imperdiet sollicitudin nisi sed mattis. Maecenas eu consequat nisi. Sed odio ex, vehicula id condimentum sit amet, fringilla at orci. Praesent ut molestie justo. Nulla facilisi. Fusce mollis felis ac libero commodo convallis. Maecenas ullamcorper scelerisque massa, eget interdum arcu hendrerit vitae. Integer vel leo ante. Aenean ut tincidunt libero. Maecenas sagittis luctus urna vitae tincidunt. Aliquam erat volutpat. Nullam pharetra ornare ipsum nec posuere.
        </p>

        <p>
            Maecenas et mauris a nisl ullamcorper faucibus. Sed non quam elit. In condimentum lorem id tincidunt pretium. Nulla congue dapibus nisi. Phasellus vel imperdiet est, lobortis tincidunt nisi. Donec rutrum ligula vitae felis suscipit, lacinia volutpat quam blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>

        <p>
            Donec id erat at arcu aliquam elementum vitae at leo. Duis auctor at magna sit amet fringilla. Etiam libero magna, fermentum non tellus in, congue ornare velit. Donec posuere magna nec tortor imperdiet fermentum. Curabitur at orci orci. Vivamus maximus magna at ligula luctus consequat. Proin vulputate mi ut lectus interdum, eget pretium urna dignissim. Pellentesque feugiat elit nisl, ut molestie lorem tempus tincidunt. In tempor quam ut lorem viverra lobortis. Phasellus imperdiet, arcu at malesuada cursus, est odio aliquam mi, et volutpat tellus quam id lectus.        
        </p>

        <h3>Subheadline two</h3>
        
        <p>
            Curabitur posuere at erat dapibus pharetra. In sed sem
            ultricies, cursus dui a, malesuada nisi. Aliquam tempus velit 
            diam, eu malesuada dui blandit a. Vestibulum id efficitur ex,
            nec scelerisque magna.
        </p>
        
        <figure>
            <div class="chart">
                <img src="./charts/ghg-emissions-by-type.png"  alt="imagechart"/>
            </div>
            <figcaption>Source: Office for National Statistics</figcaption>
        </figure>
        
        <p>
            <a href="#sourcelink">Data for greenhouse gases in the UK from 1990 to 2020 (XLSX, 139KB)</a>
        </p>
        
        <p>
            Nunc porta dictum urna volutpat varius. Suspendisse ut 
            consequat purus. Mauris urna velit, rhoncus vel pretium sed,
            sodales eget odio.
        </p>
        
        <p>
            Donec a nunc id elit egestas eleifend. Fusce semper dui eu
            varius laoreet. Donec mattis enim nec purus luctus, quis
            rhoncus nulla congue. Donec mattis turpis vitae maximus
            fringilla.
        </p>
        
        <p>
            Ut lacinia, est eu rhoncus blandit, enim sem luctus lorem,
            pellentesque congue neque felis a risus. Sed gravida nulla nec
            ligula congue, a pharetra nisi viverra. Nam vitae turpis sit
            amet urna finibus accumsan.
        </p>
        
        <a href="#backtotop">Back to the top</a>
    </section>

    <hr />
    
    <section>
        <h2>Climate change headline two</h2>
        
        <p>
            Fusce placerat, arcu eu dignissim molestie, enim enim feugiat
            tortor, id aliquam dolor ex ut ipsum. Donec lectus dui,
            pulvinar ullamcorper augue id, aliquam ultricies mauris.
        </p>
        
        <p>
            Maecenas a elit at orci venenatis bibendum. Vivamus sollicitudin
            ipsum eget feugiat gravida. Nulla facilisis ullamcorper pretium.
            Nullam dapibus ligula et turpis vestibulum eleifend. Sed non
            venenatis libero, ut lobortis nisl.
        </p>
        
        <p>
            Aenean tincidunt, augue quis tempor pharetra, elit nisi sagittis
            arcu, sed convallis felis lacus viverra arcu.
        </p>
        
        <p>
            <strong>
                Quisque hendrerit est in ante efficitur tristique. Vestibulum
                scelerisque faucibus consectetur. Proin eget lectus massa. Etiam
                quis velit porttitor, convallis purus at, feugiat ligula.
            </strong>
        </p>
        
        <figure>
            <div class="chart">
                <div class="chart">
                    <img src="./charts/reduction-by-type-of-fuel.png" alt="charts"/>
                </div>
            </div>
            <figcaption>Source: Office for National Statistics</figcaption>
        </figure>
        
        <ol>
            <li>
                <p>
                    Proin rhoncus pharetra dolor, nec porta leo viverra a.
                    Integer nec tempus metus. Praesent auctor, risus a iaculis 
                    molestie, risus odio tempus lectus, et vehicula libero turpis
                    sed augue.
                </p>
            </li>
            <li>
                <p>
                    Vestibulum tristique mauris vel urna pharetra finibus.
                    Vestibulum dapibus ullamcorper nulla a venenatis. Phasellus 
                    consequat odio in est luctus feugiat. Fusce sed magna quis mi 
                    ultricies placerat.
                </p>
            </li>
            <li>
                <p>
                    Suspendisse sagittis mauris sit amet ipsum finibus, a vulputate
                    dui semper.
                </p>
            </li>
        </ol>
        
    </section>
</article>