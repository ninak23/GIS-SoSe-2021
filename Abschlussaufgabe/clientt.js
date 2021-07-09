"use strict";
class ModuleTable {
    constructor() {
        this.table = document.createElement("table");
        this.thead = this.table.createTHead();
        this.tbody = this.table.createTBody();
        var table = document.getElementById("firstname");
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = "Module ID";
    }
}
//# sourceMappingURL=clientt.js.map