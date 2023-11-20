// ignore_for_file: unused_import

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:intl/intl.dart';
import 'package:maintenance_portal/dash.dart';
import 'package:syncfusion_flutter_datagrid/datagrid.dart';

import 'workorder.dart';

class notify extends StatelessWidget {
  const notify({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NOTIFICATION LIST',
      debugShowCheckedModeBanner: false,
      theme:
          ThemeData(primarySwatch: Colors.blue, brightness: Brightness.light),
      home: JsonDataGrid(),
    );
  }
}

class JsonDataGrid extends StatefulWidget {
  @override
  _JsonDataGridState createState() => _JsonDataGridState();
}

class _JsonDataGridState extends State<JsonDataGrid> {
  late _JsonDataGridSource jsonDataGridSource;
  List<_Product> productlist = [];

  Future generateProductList() async {
    var response = await http.post(Uri.parse('http://localhost:3030/notlist'));
    var list =
        json.decode(response.body)['data227'].cast<Map<String, dynamic>>();
    productlist =
        await list.map<_Product>((json) => _Product.fromJson(json)).toList();
    jsonDataGridSource = _JsonDataGridSource(productlist);
    print(productlist);
    return productlist;
  }

  List<GridColumn> getColumns() {
    List<GridColumn> columns;
    columns = ([
      GridColumn(
        columnName: 'NOTIFICATION NUMBER',
        width: 230,
        label: Container(
          padding: EdgeInsets.symmetric(horizontal: 16.0),
          alignment: Alignment.center,
          child: Text(
            'NOTIFICATION NUMBER',
            overflow: TextOverflow.ellipsis,
            softWrap: true,
          ),
        ),
      ),
      GridColumn(
        columnName: 'DESCRIPTION',
        width: 250,
        label: Container(
          padding: EdgeInsets.all(8),
          alignment: Alignment.center,
          child: Text(
            'DESCRIPTION',
            overflow: TextOverflow.ellipsis,
            softWrap: true,
          ),
        ),
      ),
      GridColumn(
        columnName: 'FUNCTIONAL DESCRIPTION',
        width: 210,
        label: Container(
          padding: EdgeInsets.all(8),
          alignment: Alignment.center,
          child: Text(
            'FUNCTIONAL DESCRIPTION',
            overflow: TextOverflow.ellipsis,
            softWrap: true,
          ),
        ),
      ),
      GridColumn(
        columnName: 'NOTIFICATION DATE',
        width: 210,
        label: Container(
          padding: EdgeInsets.all(8),
          alignment: Alignment.center,
          child: Text(
            'NOTIFICATION DATE',
            overflow: TextOverflow.ellipsis,
            softWrap: true,
          ),
        ),
      ),
      GridColumn(
        columnName: 'NOTIFICATION TIME',
        width: 210,
        label: Container(
          padding: EdgeInsets.all(8),
          alignment: Alignment.center,
          child: Text(
            'NOTIFICATION TIME',
            overflow: TextOverflow.ellipsis,
            softWrap: true,
          ),
        ),
      ),
      GridColumn(
        columnName: 'START DATE',
        width: 210,
        label: Container(
          padding: EdgeInsets.all(8),
          alignment: Alignment.center,
          child: Text(
            'START DATE',
            overflow: TextOverflow.ellipsis,
            softWrap: true,
          ),
        ),
      ),
      GridColumn(
        columnName: 'PROTOTYPE',
        width: 210,
        label: Container(
          padding: EdgeInsets.symmetric(horizontal: 16.0),
          alignment: Alignment.center,
          child: Text(
            'PROTOTYPE',
            overflow: TextOverflow.ellipsis,
            softWrap: true,
          ),
        ),
      ),
    ]);
    return columns;
  }

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('NOTIFICATION LIST'),
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.arrow_back_ios,
              color: Colors.white,
            ),
            onPressed: () {
              Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => dashboard(
                            title: 'dashboard',
                          )));
            },
          )
        ],
      ),
      body: FutureBuilder(
        future: generateProductList(),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(
              child: CircularProgressIndicator(),
            );
          } else {
            if (snapshot.hasError) {
              return Center(
                child: Text('Error while fetching data'),
              );
            } else {
              return jsonDataGridSource != null
                  ? SfDataGrid(
                      source: jsonDataGridSource,
                      columnWidthMode: ColumnWidthMode.fill,
                      columns: getColumns(),
                    )
                  : Center(
                      child: Text('No data'),
                    );
            }
          }
        },
      ),
    );
  }
}

class _Product {
  factory _Product.fromJson(Map<String, dynamic> json) {
    return _Product(
      NOTIFICAT: json['NOTIFICAT']['_text'],
      DESCRIPT: json['DESCRIPT']['_text'],
      FUNCLDESCR: json['FUNCLDESCR']['_text'],
      NOTIFDATE: json['NOTIFDATE']['_text'],
      NOTIFTIME: json['NOTIFTIME']['_text'],
      STARTDATE: json['STARTDATE']['_text'],
      PRIOTYPE: json['PRIOTYPE']['_text'],
    );
  }

  _Product({
    this.NOTIFICAT,
    this.DESCRIPT,
    this.FUNCLDESCR,
    this.NOTIFDATE,
    this.NOTIFTIME,
    this.STARTDATE,
    this.PRIOTYPE,
  });
  String? NOTIFICAT;
  String? DESCRIPT;
  String? FUNCLDESCR;
  String? NOTIFDATE;
  String? NOTIFTIME;
  String? STARTDATE;

  String? PRIOTYPE;
}

class _JsonDataGridSource extends DataGridSource {
  _JsonDataGridSource(this.productlist) {
    buildDataGridRow();
  }

  List<DataGridRow> dataGridRows = [];
  List<_Product> productlist = [];

  void buildDataGridRow() {
    dataGridRows = productlist.map<DataGridRow>((dataGridRow) {
      return DataGridRow(cells: [
        DataGridCell<String>(
            columnName: 'NOTIFICAT', value: dataGridRow.NOTIFICAT),
        DataGridCell<String>(
            columnName: 'DESCRIPTION', value: dataGridRow.DESCRIPT),
        DataGridCell<String>(
            columnName: 'FUNCLDESCR', value: dataGridRow.FUNCLDESCR),
        DataGridCell<String>(
            columnName: 'NOTIFDATE', value: dataGridRow.NOTIFDATE),
        DataGridCell<String>(
            columnName: 'NOTIFTIME', value: dataGridRow.NOTIFTIME),
        DataGridCell<String>(
            columnName: 'STARTDATE', value: dataGridRow.STARTDATE),
        DataGridCell<String>(
            columnName: 'PRIOTYPE', value: dataGridRow.PRIOTYPE),
      ]);
    }).toList(growable: false);
  }

  @override
  List<DataGridRow> get rows => dataGridRows;

  @override
  DataGridRowAdapter buildRow(DataGridRow row) {
    return DataGridRowAdapter(cells: [
      Container(
        alignment: Alignment.center,
        padding: EdgeInsets.all(8.0),
        child: Text(
          row.getCells()[0].value.toString(),
          overflow: TextOverflow.ellipsis,
        ),
      ),
      Container(
        alignment: Alignment.center,
        padding: EdgeInsets.all(8.0),
        child: Text(
          row.getCells()[1].value.toString(),
          overflow: TextOverflow.ellipsis,
        ),
      ),
      Container(
        alignment: Alignment.center,
        padding: EdgeInsets.all(8.0),
        child: Text(
          row.getCells()[2].value.toString(),
          overflow: TextOverflow.ellipsis,
        ),
      ),
      Container(
        alignment: Alignment.center,
        padding: EdgeInsets.all(8.0),
        child: Text(
          row.getCells()[3].value.toString(),
          overflow: TextOverflow.ellipsis,
        ),
      ),
      Container(
        alignment: Alignment.center,
        padding: EdgeInsets.all(8.0),
        child: Text(
          row.getCells()[4].value.toString(),
          overflow: TextOverflow.ellipsis,
        ),
      ),
      Container(
        alignment: Alignment.center,
        padding: EdgeInsets.all(8.0),
        child: Text(
          row.getCells()[5].value.toString(),
          overflow: TextOverflow.ellipsis,
        ),
      ),
      Container(
        alignment: Alignment.center,
        padding: EdgeInsets.all(8.0),
        child: Text(
          row.getCells()[6].value.toString(),
          overflow: TextOverflow.ellipsis,
        ),
      ),
    ]);
  }
}
