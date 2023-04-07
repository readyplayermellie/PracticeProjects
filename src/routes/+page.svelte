<script>
    export let data;
</script>

<h2>{data.aboutPage.title}</h2>
<p>{data.aboutPage.content[0]}</p>
<p>{data.aboutPage.content[1]}</p>
<p>{data.aboutPage.content[2]}</p>

<ul>
    {#each data.aboutPage.prompts as item}
    <li>{item}</li>
    {/each}
</ul>