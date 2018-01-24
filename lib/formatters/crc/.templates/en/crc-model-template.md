<table width="100%">

<thead>

<tr valign="top" align="left">

<th colspan="2">

### <samp><%= _.get(crcModel, 'class.meta.kind') %> `<%- _.get(crcModel, 'class.name') %>`</samp>

> <%- _.get(crcModel, 'class.meta.description') %>

</th>

</tr>

<tr valign="top" align="left">

<th>Responsibilities</th>

<th>Collaborators</th>

</tr>

</thead>

<tbody>

<tr valign="top" align="left">

<td width="50%"><% if (_.isEmpty(crcModel.collaborators)) { %> None found. <% } else { %>

1.  <%- crcSummary.responsibility %>

<% }); %> <% } %></td>

<td width="50%"><% if (_.isEmpty(crcModel.collaborators)) { %> None found.<% } else { %>

1.  `<%- _.get(collaborator, 'class.name') %>` <% const start = collaborator.class.loc.start %> <a href=""><%- start.line %></a> : <a href=""><%- start.column %></a>

<% } %></td>

</tr>

</tbody>

<tfoot valign="top" align="left">

<tr valign="top" align="left" width="100%">

<td bgcolor="#fcfcfc" colspan="2"><details><summary>![Select to toggle details](./icon-javascript-filled-25.png "Select to toggle details")`<%- _.get(crcModel, 'class.name') %>` details...</summary>

<dl>

<dt>**Source code**</dt>

<dd>

> ```js <%= _.get(crcModel, 'class.code.text') %> ```

</dd>

<dt>**References**</dt>

<dd>

> **Square is referenced _n_ times in _n<sub>1</sub>_ files.**
>
>
> 1.  TODO: reference one.
> 2.  TODO: reference two.
> 3.  TODO: reference one.

</dd>

<dt>**Path**</dt>

<dd>

> <%- _.get(crcModel, 'class.meta.filePath') %>

</dd>

</dl>

</details></td>

</tr>

</tfoot>

</table>
