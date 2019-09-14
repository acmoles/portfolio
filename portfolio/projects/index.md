# List of projects

projects here

<ul>
  <li v-for="page in $site.pages">
    <router-link :to="page.path">{{ page.title }}</router-link>
  </li>
</ul>
