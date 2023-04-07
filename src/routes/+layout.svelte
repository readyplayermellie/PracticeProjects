<script>
    import SideBar from '../components/SideBar.svelte';
</script>
 
<div>
    <h1>Ready Player Mellie's practice projects</h1>
    <div id="container">
        <SideBar />
    
        <div id="slot">
            <slot></slot>
        </div>
    </div>
</div>

<style lang="scss">
#container {
    display: flex;
}
#slot {
    padding: 10px;

}
</style>