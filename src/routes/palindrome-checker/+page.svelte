<script>
export let data;
let palindrome = '';
let revertedValue = '';

function palindromeChecker() {
    revertedValue = palindrome.split('').reverse('').join('');
}
</script>

<h2>{data.palindromeChecker.title}</h2>

<label for="palindrome-input">Enter a palindrome</label>
<input bind:value={palindrome} type="text" id="palindrome-input">
<button on:click="{palindromeChecker}">Submit</button>

{#if revertedValue.length != 0}
    {#if revertedValue === palindrome}
        <p id="palindrome">The word {revertedValue} is indeed a palindrome. Well done!</p>
    {:else}
        <p id="no-palindrome">The word {revertedValue} is not a palindrome, please do better.</p>
    {/if}
{/if}

<style>
    #no-palindrome {
        color: red;
    }
    #palindrome {
        color: green;
    }
</style>