
> eslint-plugin-crc@0.2.0 lint /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc
> eslint . --fix "-f" "html" "lib"

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>ESLint Report</title>
        <style>
            body {
                font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;
                font-size:16px;
                font-weight:normal;
                margin:0;
                padding:0;
                color:#333
            }
            #overview {
                padding:20px 30px
            }
            td, th {
                padding:5px 10px
            }
            h1 {
                margin:0
            }
            table {
                margin:30px;
                width:calc(100% - 60px);
                max-width:1000px;
                border-radius:5px;
                border:1px solid #ddd;
                border-spacing:0px;
            }
            th {
                font-weight:400;
                font-size:medium;
                text-align:left;
                cursor:pointer
            }
            td.clr-1, td.clr-2, th span {
                font-weight:700
            }
            th span {
                float:right;
                margin-left:20px
            }
            th span:after {
                content:"";
                clear:both;
                display:block
            }
            tr:last-child td {
                border-bottom:none
            }
            tr td:first-child, tr td:last-child {
                color:#9da0a4
            }
            #overview.bg-0, tr.bg-0 th {
                color:#468847;
                background:#dff0d8;
                border-bottom:1px solid #d6e9c6
            }
            #overview.bg-1, tr.bg-1 th {
                color:#f0ad4e;
                background:#fcf8e3;
                border-bottom:1px solid #fbeed5
            }
            #overview.bg-2, tr.bg-2 th {
                color:#b94a48;
                background:#f2dede;
                border-bottom:1px solid #eed3d7
            }
            td {
                border-bottom:1px solid #ddd
            }
            td.clr-1 {
                color:#f0ad4e
            }
            td.clr-2 {
                color:#b94a48
            }
            td a {
                color:#3a33d1;
                text-decoration:none
            }
            td a:hover {
                color:#272296;
                text-decoration:underline
            }
        </style>
    </head>
    <body>
        <div id="overview" class="bg-1">
            <h1>ESLint Report</h1>
            <div>
                <span>1 problem (0 errors, 1 warning)</span> - Generated on Wed Nov 29 2017 11:24:55 GMT-0600 (CST)
            </div>
        </div>
        <table>
            <tbody>
                <tr class="bg-0" data-group="f-0">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/class-declaration-crc-class.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-1">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/class-expression-crc-class.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-2">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-class.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-3">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-model.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-4">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/crc-responsibilities-builder.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-5">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/index.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-6">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/new-expression-crc-class.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-7">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/object-expression-crc-class.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-8">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/crc/prototype-constructor-crc-class.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-9">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/formatters/markdown/index.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-10">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/index.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-11">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/rules/ast-config.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-1" data-group="f-12">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/rules/crc-report.js
        <span>1 problem (0 errors, 1 warning)</span>
    </th>
</tr>
<tr style="display:none" class="f-12">
    <td>13:1</td>
    <td class="clr-1">Warning</td>
    <td>Line 13 exceeds the maximum line length of 80.</td>
    <td>
        <a href="https://eslint.org/docs/rules/max-len" target="_blank">max-len</a>
    </td>
</tr>

<tr class="bg-0" data-group="f-13">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/lib/rules/index.js
        <span>0 problems</span>
    </th>
</tr>

<tr class="bg-0" data-group="f-14">
    <th colspan="4">
        [+] /Users/swindle/Projects/github/gregswindle/eslint-plugin-crc/markdown.config.js
        <span>0 problems</span>
    </th>
</tr>

            </tbody>
        </table>
        <script type="text/javascript">
            var groups = document.querySelectorAll("tr[data-group]");
            for (i = 0; i < groups.length; i++) {
                groups[i].addEventListener("click", function() {
                    var inGroup = document.getElementsByClassName(this.getAttribute("data-group"));
                    this.innerHTML = (this.innerHTML.indexOf("+") > -1) ? this.innerHTML.replace("+", "-") : this.innerHTML.replace("-", "+");
                    for (var j = 0; j < inGroup.length; j++) {
                        inGroup[j].style.display = (inGroup[j].style.display !== "none") ? "none" : "table-row";
                    }
                });
            }
        </script>
    </body>
</html>

