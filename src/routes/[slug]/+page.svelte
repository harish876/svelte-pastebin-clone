<script>
  import { page } from "$app/stores";
  import { copy } from "svelte-copy";
  let data = null;
  let formData = {
    password: "",
    id: $page.url?.pathname?.split("/")[1],
  };
  let errorMessage = "";
  let isPasswordCorrect = false;

  async function checkPassword(event) {
    event.preventDefault();
    const response = await fetch("/api", {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.ok) {
      isPasswordCorrect = true;
      const res = await response.json();
      data = res.data;
      console.log(data);
      errorMessage = "";
    } else {
      errorMessage = "Incorrect password. Please try again.";
    }
  }
</script>

{#if !isPasswordCorrect && !data}
  <div class="hero min-h-[1000px] bg-base-200">
    <div class:modal-open={!isPasswordCorrect} class="w-96 flex flex-col modal-top">
      <div class="modal-box">
        <input
          id="password"
          bind:value={formData.password}
          type="password"
          name="password"
          placeholder="Enter Password"
          class="mt-2 input input-bordered w-full max-w-xs"
        />
        <button
          class="mt-2 btn btn-neutral float-right"
          on:click={checkPassword}>Submit</button
        >
      </div>
    </div>
  </div>
{:else if isPasswordCorrect && data}
  <div class="hero min-h-screen bg-base-200">
    <div class="card w-[800px] bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title flex justify-between font-semibold">
          {data.title}
          <div class="badge badge-secondary">
            {data.encrypted ? "Encrypted" : "Not Encrypted"}
          </div>
          <input
            id="clipboard_copy"
            type="checkbox"
            aria-label="Copy to clipboard"
            use:copy={data.text}
            class="btn"
          />
        </h2>
        <p class="overflow-auto p-4">{data.text}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">
            Expires in {data.paste_expiration}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
