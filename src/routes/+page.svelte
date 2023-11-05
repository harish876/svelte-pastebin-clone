<div class="hero min-h-screen bg-base-200">
  <div class="hero-content">
    <div class="card flex-shrink-0 max-w-7xl shadow-2xl bg-base-100 w-screen">
      <form class="card-body" method="POST">
        <div class="form-control">
          <label for="text" class="label">
            <span class="label-text">Paste your Text</span>
          </label>
          <textarea
            name="text"
            class="textarea textarea-bordered h-24"
            placeholder="Text..."
          />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-control">
            <label for="title" class="label">
              <span class="label-text">Title</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Title..."
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label for="password" class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password..."
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label for="description" class="label">
              <span class="label-text">Description</span>
            </label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="You must login to use this feature"
              class="input input-bordered"
              disabled
            />
          </div>
          <div class="form-control w-full">
            <label for="paste_expiration" class="label">
              <span class="label-text">Paste Expiration</span>
            </label>
            <select
                  id="paste_expiration"
                  name="paste_expiration"
                  class="select select-bordered">
              <option disabled selected>Pick one</option>
              <option>1 day</option>
              <option>1 week</option>
              <option>15 days</option>
              <option>1 month</option>
              <option>2 months</option>
              <option>6 months</option>
            </select>
          </div>
          <div class="form-control mt-2">
            <label class="label cursor-pointer">
              <span class="label-text">Encrypt Paste?</span>
              <input name="encrypt" type="checkbox" class="checkbox" />
            </label>
          </div>
        </div>
        <div class="form-control mt-6 flex flex-row justify-between">
          <button type="reset" class="btn btn-neutral">Clear </button>
          <button type="" class="btn btn-primary">Submit </button>
        </div>
      </form>
    </div>
  </div>
</div>
