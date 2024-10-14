<?php
session_start();

if (!isset($_SESSION['username'])) {
    header('Location: ovfts\DASHBOARD ADMIN\Login\log.html');
    exit();
}
?>
<!DOCTYPE html>
<html :class="{ 'theme-dark': dark }" x-data="data()" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ECA-OVFTS</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/tailwind.output.css" />
    <script
      src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
      defer
    ></script>
    <script src="./assets/js/init-alpine.js"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
      defer
    ></script>
    <script src="./assets/js/charts-lines.js" defer></script>
    <script src="./assets/js/charts-pie.js" defer></script>

    <style>
       .relative{
        list-style: none;
      }
        .btn-delete {
            display: inline-block;
            padding: 8px 16px;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            color: #fff;
            background-color: #e53e3e; /* Red background */
            border: 1px solid #c53030; /* Darker red border */
            border-radius: 4px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .btn-delete:hover {
            background-color: #c53030; /* Darker red background on hover */
            color: #fff;
        }

        .btn-delete:active {
            background-color: #b83232; /* Even darker red on click */
        }

        .btn-delete:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5);
        }
        .btn-primary {
          display: inline-block;
          margin-top: 5px;
          margin-left: 300px;
          padding: 8px 16px;
          font-size: 15px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          color: #fff;
          background-color: #4f46e5; /* Adjust color as needed */
          border-radius: 4px;
          transition: background-color 0.3s ease, color 0.3s ease;
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: #4338ca; /* Darker shade for hover */
        }

        .btn-primary:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.5); /* Adjust focus color as needed */
        }
    </style>
    
  </head>

  <body>
    
    <div
      class="flex h-screen bg-gray-50 dark:bg-gray-900"
      :class="{ 'overflow-hidden': isSideMenuOpen }">

      <aside
        class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">

        <div class="py-4 text-gray-500 dark:text-gray-400">

          <a
            class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            href="#">
            ECA-OVFTS
          </a>
          <ul class="mt-6">
            <li class="relative px-6 py-3">
              <a
                class=                "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="Dashboard.php">
                
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor" >

                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>

                </svg>
                <span class="ml-4">Dashboard</span>
              </a>
            </li>
          </ul>
          
          <ul>
            <li class="relative px-6 py-3">
              <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="marine transpo.php">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                </svg>
                <span class="ml-4">BS Marine Transportaion</span>
              </a>
            </li>

            <li class="relative px-6 py-3">
              <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="marine engi.php">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                </svg>
              </svg>
              <span class="ml-4">BS Marine Engineering</span>
            </a>
          </li>

          <li class="relative px-6 py-3">
            <a
              class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="tourism.php">
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
              </svg>
            </svg>
            <span class="ml-4">BS Tourism Management</span>
          </a>
        </li>

        <li class="relative px-6 py-3">
          <a
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="Crim.php">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
            </svg>
          </svg>
          <span class="ml-4">BS Criminology</span>
        </a>
      </li>

      <li class="relative px-6 py-3">
        <a
          class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          href="entre.php">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
          </svg>
        </svg>
        <span class="ml-4">BS Entrepreneurship</span>
      </a>
    </li>

    <li class="relative px-6 py-3">
      <a
        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        href="accounting.php">
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor">
        </svg>
      </svg>
      <span class="ml-4">BS Management Accounting</span>
    </a>
  </li>

  <li class="relative px-6 py-3">
    <a
      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
      href="infosys.php">
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor">
      </svg>
    </svg>
    <span class="ml-4">BS Information System</span>
  </a>
</li>

<li class="relative px-6 py-3">
  <span
  class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
  aria-hidden="true"
></span>
  <a
    class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
    href="child edu.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">BE Childhood Education</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="teacher edu.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">BTV Teacher Education</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="nursing.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">BS Nursing</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="abm.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">ABM</span>
</a>
</li>
<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="humss.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">HUMSS</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="gas.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">GAS</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="stem.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">STEM</span>
</a>
</li>
</template>

      </aside>
      <div
        x-show="isSideMenuOpen"
        x-transition:enter="transition ease-in-out duration-150"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in-out duration-150"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
      ></div>
      <aside
        class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
        x-show="isSideMenuOpen"
        x-transition:enter="transition ease-in-out duration-150"
        x-transition:enter-start="opacity-0 transform -translate-x-20"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in-out duration-150"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0 transform -translate-x-20"
        @click.away="closeSideMenu"
        @keydown.escape="closeSideMenu"
      >
        <div class="py-4 text-gray-500 dark:text-gray-400">
          <a
            class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            href="#"
          >
            ECA-OVFTS
          </a>

          <ul class="mt-6">
            <li class="relative px-6 py-3">
              <a
                class=                "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="index.php">
                
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor" >

                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>

                </svg>
                <span class="ml-4">Dashboard</span>
              </a>
            </li>
          </ul>
          
          <ul>
            <li class="relative px-6 py-3">
              <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="marine transpo.php">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                </svg>
                <span class="ml-4">BS Marine Transportaion</span>
              </a>
            </li>

            <li class="relative px-6 py-3">
              <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="marine engi.php">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                </svg>
              </svg>
              <span class="ml-4">BS Marine Engineering</span>
            </a>
          </li>

          <li class="relative px-6 py-3">
            <a
              class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="tourism.php">
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
              </svg>
            </svg>
            <span class="ml-4">BS Tourism Management</span>
          </a>
        </li>

        <li class="relative px-6 py-3">
          <a
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            href="Crim.php">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
            </svg>
          </svg>
          <span class="ml-4">BS Criminology</span>
        </a>
      </li>

      <li class="relative px-6 py-3">
        <a
          class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          href="entre.php">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
          </svg>
        </svg>
        <span class="ml-4">BS Entrepreneurship</span>
      </a>
    </li>

    <li class="relative px-6 py-3">
      <a
        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        href="accounting.php">
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor">
        </svg>
      </svg>
      <span class="ml-4">BS Management Accounting</span>
    </a>
  </li>

  <li class="relative px-6 py-3">
    <a
      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
      href="infosys.php">
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor">
      </svg>
    </svg>
    <span class="ml-4">BS Information System</span>
  </a>
</li>

<li class="relative px-6 py-3">
  <span
  class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
  aria-hidden="true"
></span>
  <a
    class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
    href="child edu.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">BE Childhood Education</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="teacher edu.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">BTV Teacher Education</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="nursing.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">BS Nursing</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="abm.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">ABM</span>
</a>
</li>
<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="humss.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">HUMSS</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="gas.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">GAS</span>
</a>
</li>

<li class="relative px-6 py-3">
  <a
    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    href="stem.php">
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
    </svg>
  </svg>
  <span class="ml-4">STEM</span>
</a>
</li>
</ul>
      </aside>
      <div class="flex flex-col flex-1 w-full">
        <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
          <div
            class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">


            <button
              class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              @click="toggleSideMenu"
              aria-label="Menu"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <h2 
              class="text-2xl font-semibold text-gray-700 dark:text-gray-200" >
            BACHELOR OF EARLY CHILDHOOD EDUCATION
            </h2>
            <button id="exportExcelBtn" class="btn btn-primary">
                Export to Excel
              </button><script>
                  document.getElementById('exportExcelBtn').addEventListener('click', function() {
                      window.location.href = 'exportEDU.php'; // URL to your PHP export script
                  });
                  </script>

              <li class="flex">
                <button
                  class="rounded-md focus:outline-none focus:shadow-outline-purple"
                  @click="toggleTheme"
                  aria-label="Toggle color mode"
                >
                  <template x-if="!dark">
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                      ></path>
                    </svg>
                  </template>
                  <template x-if="dark">
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </template>
                </button>
              </li>
          </div>
        </header>
        
        <main class="h-full overflow-y-auto">
          <div class="container px-2 mx-auto grid ">
          <div class="flex mb-2 ml-20">
          </div>
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                  <thead>
                  <tr class="text-l font-bold tracking-wide text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th class="px-2 py-1"></th>
                    <th class="px-2 py-1">Last Name</th>
                    <th class="px-2 py-1">First Name</th>
                    <th class="px-2 py-1">Gender</th>
                    <th class="px-2 py-1">Course</th>
                    <th class="px-2 py-1">Email</th>
                    <th class="px-2 py-1">Contact</th>
                    <th class="px-2 py-1">Last/Current School</th>
                    <th class="px-2 py-1">Remove</th>
                </tr>
                  </thead>
                  
                  <tbody class="text-center text-sm bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    <?php
                    // Database connection
                    $conn = new mysqli('localhost', 'root', '', 'admin');
    
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }
    
                    // SQL query to fetch data for Business Administration department
                    $sql = "SELECT * FROM registrations WHERE Course = 'BECED' ORDER BY Date,LastName,FirstName ASC";
                    $result = $conn->query($sql);
    
                    if ($result->num_rows > 0) {
                        $id = 1;
                        while ($row = $result->fetch_assoc()) {
                          echo "<tr class='text-gray-700 dark:text-gray-400'>";
                          echo "<td class='px-2 py-1'>" . $id++ . ".</td>";
                          echo "<td class='px-2 py-1'>" . htmlspecialchars($row['LastName']) . "</td>";
                          echo "<td class='px-2 py-1'>" . htmlspecialchars($row['FirstName']) . "</td>";
                          echo "<td class='px-2 py-1'>" . htmlspecialchars($row['Gender']) . "</td>";
                          echo "<td class='px-2 py-1'>" . htmlspecialchars($row['Course']) . "</td>";
                          echo "<td class='px-2 py-1'>" . htmlspecialchars($row['Email']) . "</td>";
                          echo "<td class='px-2 py-1'>" . htmlspecialchars($row['Phone']) . "</td>";
                          echo "<td class='px-2 py-1'>" . htmlspecialchars($row['Lastschool']) . "</td>";
                          echo "<td class='px-2 py-1'><a href='delCHILD.php?UserID=" . $row['UserID'] . "' class='btn-delete'>DELETE</a></td>";
                          echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan='100%' class='px-4 py-3 text-center'>No records found</td></tr>";
                    }
                    
    
                    $conn->close();
                    ?>
                </tbody>
  </body>
</html>
