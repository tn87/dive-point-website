+++
title = 'About'
date = 2024-01-12T12:06:45+02:00
+++

# About

- a
- b
- c
  {{< rawhtml >}}
  <form method="POST" action="/api/contact">
        <div>
          <label for="name">Name:</label>
          <input id="name" name="name" type="text" />
        </div>

        <div>
          <label for="email">Email:</label>
          <input id="email" name="email" type="email" />
        </div>

        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>

        <button type="submit">Submit</button>

</form>
{{< /rawhtml >}}
