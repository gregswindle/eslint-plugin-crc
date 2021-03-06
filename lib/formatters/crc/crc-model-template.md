<!-- crc-model-template:html,markdown -->
<table width="100%">
  <thead>
    <tr valign="top" align="left">
      <th colspan="2">
        <h3>
          <tt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a></tt>
            <%- _.get(crcModel, 'class.name') %>
            <tt>extends
            <%= _.get(crcModel, 'class.superClass.name') || '<a rel="noopener" href="https://is.gd/ZZBLcn" target="mdn">Object</a>' %></tt>
       </h3>
       <blockquote>
         <%- crcModel.class.description %>
       </blockquote>
       </th>
    </tr>
    <tr valign="top" align="left">
      <th>Responsibilities</th>
      <th>Collaborators</th>
    </tr>
  </thead>
  <tfoot valign="top" align="left">
    <tr valign="top" align="left" width="100%">
      <td bgcolor="#fcfcfc" colspan="2">
        <details>
          <summary><img src="docs/img/icons8/icon-javascript-filled-25.png" alt="Select to toggle" align="top"> Details...</summary>
            <dl>
            <dt><strong>Example</dt>
            <dd><blockquote>

```js

```

</blockquote>
</dd>
            <dt><strong>Source code</strong></dt>
            <dd><blockquote>

```js
<%= crcModel.class.code.text %>
```

</blockquote></dd>
            <dt><strong>References</strong></dt>
            <dd>
              <blockquote><strong>Square is referenced <em>n</em> times in <em>n<sub>1</sub></em> files.</strong><br><br>
            <ol>
              <li>TODO: reference one.</li>
              <li>TODO: reference two.</li>
              <li>TODO: reference one.</li>
           </ol></blockquote></dd>
            </dl>
        </details>
      </td>
    </tr>
  </tfoot>
  <tbody>
    <tr valign="top" align="left">
    <td width="50%">
      <ol><% _.forEach(crcModel.responsibilities, crcSummary => { %>
          <li><%- crcSummary.responsibility %></li><% }); if (_.isEmpty(crcModel.responsibilities)) { %> Undetermined. <% }%></ol>
    </td>
    <td width="50%">
      <ol><% _.forEach(crcModel.collaborators, collaborator => { %>
      <%- collaborator %>
          <li><code><%- _.get(collaborator, 'class.name') %></code><% const start = collaborator.class.loc.start %>
            <a href=""><%- start.line %>:<%- start.column %></a>
          </li><% }); if (_.isEmpty(crcModel.collaborators)) { %> None found. <% }%></ol>
    </td>
    </tr>
  </tbody>
</table>

<!--/crc-model-template:html,markdown -->


[classes-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
