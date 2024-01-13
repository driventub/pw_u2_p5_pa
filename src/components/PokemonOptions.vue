<template>
    <div class="f-container">
        <ul >
            <li>1</li>
        </ul>
    </div>
</template>

<script>


    export default {
        
    }
</script>

<style scoped>

.f-container{
    display: flex;
    justify-content: center;
    
}
ul{
    list-style-type: none;
}
li{
    background: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 250px;
    margin-bottom: 10px;
    cursor: pointer;
}

li:hover{
    background-color: rgba(0, 0, 0, 0.1);
}
</style>