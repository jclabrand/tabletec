
/****************************************************************************************

	Copyright (c) 2016-2017, Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import ReactDOM from'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Admin } from './views/adm.jsx';
import { AdmInventory } from './views/adm-inventory.jsx';
import { AdmInventoryArticles } from './views/adm-inventory-articles.jsx';
import { AdmInventoryWarehouses } from './views/adm-inventory-warehouses.jsx';
import { AdmInventoryProviders } from './views/adm-inventory-providers.jsx';
import { AdmInventoryPurchases } from './views/adm-inventory-purchases.jsx';
import { AdmInventoryTransfers } from './views/adm-inventory-transfers.jsx';
import { AdmInventoryWarehouseEntries } from './views/adm-inventory-warehouse-entries.jsx';
import { AdmInventoryWarehouseOutlets } from './views/adm-inventory-warehouse-outlets.jsx';

/****************************************************************************************/

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div>{this.props.children}</div>);
	}
}

/****************************************************************************************/

class App {
	constructor() {
		document.addEventListener("DOMContentLoaded", this.onDOMContentLoaded.bind(this));
	}

	onDOMContentLoaded() {
		this._mainSection = window.document.getElementById('app-main');
		$.extend($.validator.messages, { required: "Campo obligatorio" });
		this.render();
	}

	render() {
		ReactDOM.render(
		<BrowserRouter>
			<Main>
				<Route exact={true} path="/adm" component={Admin}/>
				<Route exact={true} path="/adm/inventarios" component={AdmInventory}/>

				<Route path="/adm/inventarios/articulos/:action?/:article?" component={AdmInventoryArticles}/>
				<Route path="/adm/inventarios/almacenes/:action?/:warehouse?" component={AdmInventoryWarehouses}/>
				<Route path="/adm/inventarios/proveedores/:action?/:provider?" component={AdmInventoryProviders}/>
				<Route path="/adm/inventarios/compras/:action?/:purchase?" component={AdmInventoryPurchases}/>
				<Route path="/adm/inventarios/transferencias/:action?/:transfer?" component={AdmInventoryTransfers}/>

				<Route path="/adm/inventarios/almacenes-entradas/:action?/:entry?" component={AdmInventoryWarehouseEntries}/>
				<Route path="/adm/inventarios/almacenes-salidas/:action?/:outlet?" component={AdmInventoryWarehouseOutlets}/>
			</Main>
		</BrowserRouter>,
		this._mainSection);
	}
}

/****************************************************************************************/

var app = new App();
