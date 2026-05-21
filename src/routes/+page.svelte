
<main>
<!-- <nav>
    <h1>Xavier Connelly</h1>
</nav> -->
<span class="wallpaper">
    <img src="/placeholder.png" alt="placeholder image">
</span>
<span id="bio">
    <p>
        My work draws on both craft and systems thinking. Having designed for over
        16 years, I love designing experiences that work in the real world — not
        just in prototypes — and that reflect how people actually behave. I have
        worked across print [1], web [2], service [3] and product design [4], [5] —
        moving gradually from ink and paper naturally moving across to pixels and
        systems.
    </p>
    <p>
        私の仕事は、クラフト（職人技）とシステム思考の両方を基盤としています。16年以上にわたりデザインに携わってきた中で、プロトタイプだけでなく現実の世界で機能し、人々の実際の行動を反映した体験をデザインすることに情熱を注いでいます。これまで、印刷物[1]、ウェブ[2]、サービス[3]、プロダクトデザイン[4]、[5]など幅広い分野で活動し、インクと紙からピクセルとシステムへと、自然な流れで移行してきました。 
    </p>
    <nav>
        <a href="/">Projects</a>
        <a href="/">Articles</a>
    </nav>
</span>


</main>

<style>
    main {
        display: flex;
        flex-direction: row;
    }
    nav {
        height: 100vh;
        width: 40px;
        padding: 20px 10px;
        position: relative;
        left: 0%;
        top: 0;
        background: white;
        border-right: 1px solid black;
    }
    /* h1 {
        all: unset;
        font-size: 20px;
        writing-mode: sideways-lr;
    } */
    #bio {
        padding: 20px;
        padding-right: 5vw;
        max-width: 50vw;
        font-size: 14px;
        font-weight: 500;
    }
    #bio p + p {
        padding-top: 1em;
    }
    .wallpaper {
        padding: 10px;
        height: 100vh;
    }
	img {
		width: 100%;
        height: 100%;
	}
</style>