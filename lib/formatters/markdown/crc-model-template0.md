


## <%= index %>
<!-- crc-model-template:html,markdown -->
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2"><h3><tt>
          <%- crcModel.name %> extends <%= _.get(crcModel.superClass, 'name') || '<a rel="noopener" href="https://is.gd/ZZBLcn" target="mdn">Object</a>' %>
        </tt></h3></th>
    </tr>
    <tr valign="top" align="left">
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tfoot valign="top" align="left">
    <tr>
      <td colspan="2"><strong>Description:</strong> <%= crcModel.description || '<tt>undefined.</tt>' %></td>
    </tr>
  </tfoot>
  <tbody>
    <tr valign="top" align="left">
      <td width="50%">
        <ol><% _.forEach(crcModel.responsibilities, responsibility => { %>
            <li><%- responsibility %></li><% }); %></ol>
      </td>
      <td width="50%">
        <ol><% _.forEach(crcModel.collaborators, collaborator => { %>
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
    <tt><%- crcModel.name %>'s</tt> source code.</summary>
  <pre><code language="javascript"><%- crcModel.source %></code></pre>
</details>

---
<!--/crc-model-template:html,markdown -->
