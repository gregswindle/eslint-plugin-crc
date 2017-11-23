
<!-- crc-model-template:html,markdown -->
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2"><h3><tt>
          <%- message.name %> extends <%= _.get(message.superClass, 'name') || '<a rel="noopener" href="https://is.gd/ZZBLcn" target="mdn">Object</a>' %>
        </tt></h3></th>
    </tr>
    <tr valign="top" align="left">
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tfoot valign="top" align="left">
    <tr>
      <td colspan="2"><strong>Description:</strong> <%= message.description || '<tt>undefined.</tt>' %></td>
    </tr>
  </tfoot>
  <tbody>
    <tr valign="top" align="left">
      <td width="50%">
        <ol><% _.forEach(message.responsibilities, responsibility => { %>
            <li><%- responsibility %></li><% }); %></ol>
      </td>
      <td width="50%">
        <ol><% _.forEach(message.collaborators, collaborator => { %>
            <li><code><%- collaborator.name %></code><% const start = collaborator.loc.start %>
              <a href=""><%- start.line %>:<%- start.column %></a>
            </li><% }); %></ol>
      </td>
    </tr>
  </tbody>
</table>

---

<details>
  <summary><img src="icon-javascript-filled-25.png" alt="Select to toggle" align="top">
    <tt><%- message.name %>'s</tt> source code.</summary>
  <pre><code language="javascript"><%- message.context.sourceCode %></code></pre>
</details>

---
<!--/crc-model-template:html,markdown -->
