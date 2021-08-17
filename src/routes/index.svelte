<script>
    import PageSummary from '$lib/PageSummary.svelte'
    import Tile from '$lib/Tile.svelte';
</script>

<PageSummary
    heading = "Climate change latest insights"
    subhead = "A roundup of the latest data and trends about climate change from the ONS and other sources."
    date = "10 August 2021"
/>

<article class="wrapper">

    <h2>Latest climate change headlines index</h2>
    
    <ul class="bullet">
        <li><a href="#headlineone">Climate change headline one</a></li>
        <li><a href="#headlinetwo">Climate change headline two</a></li>
        <li><a href="#headlinethree">Climate change headline three</a></li>
    </ul>
    
    <div class="signup">
        <a href="#signup">Sign up to our email alerts</a> for daily updates in your inbox.
    </div>
    
    <h2>Explore by topic</h2>
    
    <nav class="topics">
        <a href="climate-weather">Climate and Weather</a>
        <a href="emissions">Emissions</a>
        <a href="drivers">Drivers</a>
        <a href="impacts">Impacts</a>
        <a href="mitigation">Mitigation</a>
        <a href="adaption">Adaption</a>
    </nav>

    <section class="dashboard">
        <Tile title="Rainfall" img="tile1.png" />
        <Tile title="Carbon emissions" img="tile2.png" />
        <Tile title="Drivers visualisation" />
        <Tile title="Impacts visualisation" />
        <Tile title="Mitigation visualisation" />
        <Tile title="Adaption visualisation" />
    </section>
    
    <section>
        <h2>Climate change headline one</h2>
        
        <h3>Subheadline one</h3>
        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
            molestie nibh, ac euismod massa. Aliquam tempus neque urna, eu
            euismod nisl rhoncus et. Integer congue, arcu in imperdiet
            gravida.
        </p>
        
        <p>
            Quisque aliquet dolor ut odio placerat eleifend. Nulla id eros
            pretium, placerat dolor a, luctus turpis. 
        </p>
        
        <p>
            Nulla fermentum id erat sit amet aliquam. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. 
        </p>
        
        <p>
            Phasellus ut dignissim erat, ut porta justo. Vestibulum
            eleifend sed risus nec efficitur. Fusce congue, libero vel
            tincidunt malesuada, ipsum justo interdum ligula, ac congue
            arcu urna ut risus. Nam ultrices ac odio ac consequat. Nam
            auctor condimentum turpis nec fringilla. Donec at varius
            felis.
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
                <img src="./charts/ghg-emissions-by-type.png" alt="charts2" />
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
            <div class="chart">]
                <img src="./charts/reduction-by-type-of-fuel.png" alt="charts3" />
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