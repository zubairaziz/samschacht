<style>
    section {
        @apply bg-gray-100;
    }
</style>

<section id="contact">
    <div class="container">
        <h2>Contact Me</h2>

        <div class="flex items-center justify-center">
            <form class="w-full md:w-2/3 xl:w-1/2">
                <div class="flex flex-wrap mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-gray-700
                            text-xs font-bold mb-2"
                            for="first-name">
                            First Name
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200
                            text-gray-700 border border-gray-200 rounded py-3
                            px-4 mb-3 leading-tight focus:outline-none
                            focus:bg-white"
                            id="first-name"
                            type="text"
                            placeholder="John" />
                    </div>
                    <div class="w-full md:w-1/2 mb-6 px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700
                            text-xs font-bold mb-2"
                            for="last-name">
                            Last Name
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200
                            text-gray-700 border border-gray-200 rounded py-3
                            px-4 leading-tight focus:outline-none focus:bg-white
                            focus:border-gray-500"
                            id="last-name"
                            type="text"
                            placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-gray-700
                            text-xs font-bold mb-2"
                            for="password">
                            E-mail
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200
                            text-gray-700 border border-gray-200 rounded py-3
                            px-4 mb-3 leading-tight focus:outline-none
                            focus:bg-white focus:border-gray-500"
                            id="email"
                            type="email" />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-gray-700
                            text-xs font-bold mb-2"
                            for="password">
                            Phone
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200
                            text-gray-700 border border-gray-200 rounded py-3
                            px-4 mb-3 leading-tight focus:outline-none
                            focus:bg-white focus:border-gray-500"
                            id="phone"
                            type="number" />
                    </div>
                </div>
                <div class="flex flex-wrap mb-6">
                    <div class="w-full px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700
                            text-xs font-bold mb-2"
                            for="message">
                            Message
                        </label>
                        <textarea
                            class=" no-resize appearance-none block w-full
                            bg-gray-200 text-gray-700 border border-gray-200
                            rounded py-3 px-4 mb-3 leading-tight
                            focus:outline-none focus:bg-white
                            focus:border-gray-500 h-48 resize-none"
                            placeholder="Start typing here..."
                            id="message" />
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button
                            class="shadow bg-primary hover:bg-primary-dark
                            focus:shadow-outline focus:outline-none text-white
                            font-bold py-2 px-4 rounded"
                            type="submit">
                            Send
                        </button>
                    </div>
                    <div class="md:w-2/3" />
                </div>
            </form>
        </div>
    </div>
</section>
