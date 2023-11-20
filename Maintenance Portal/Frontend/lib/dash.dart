// ignore_for_file: unused_import, duplicate_import

import 'package:flutter/material.dart';
import 'package:maintenance_portal/notify.dart';
import 'package:maintenance_portal/workorder.dart';

import 'package:flutter/material.dart';

// ignore: camel_case_types
class dashboard extends StatefulWidget {
  const dashboard({super.key, required String title});

  @override
  State<dashboard> createState() => _dashboardState();
}

class _dashboardState extends State<dashboard> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('MAINTENANCE PORTAL'),
        backgroundColor: Color.fromARGB(121, 17, 51, 205),
        automaticallyImplyLeading: false,
        actions: [
          IconButton(
              onPressed: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (BuildContext context) {
                  return notify();
                }));
              },
              icon: Icon(Icons.logout))
        ],
      ),
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              Color.fromARGB(255, 202, 126, 217),
              Color.fromARGB(255, 202, 186, 186)
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Dashboard',
                style: TextStyle(fontSize: 48.0, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 30.0),
              ElevatedButton(
                child: Text('Notification'),
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (BuildContext context) {
                    return notify();
                  }));
                },
              ),
              Padding(
                padding: const EdgeInsets.all(28.0),
                child: ElevatedButton(
                  child: Text('Work Order'),
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (BuildContext context) {
                      return WorkOrder();
                    }));
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
