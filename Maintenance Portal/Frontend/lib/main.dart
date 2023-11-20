// ignore_for_file: depend_on_referenced_packages, prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:maintenance_portal/login.dart';
import 'package:maintenance_portal/dash.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String userId = "1";
  String password = "PASS";

  String givenUserId = "";
  String givenPassword = "";

  Future<void> _alertDialogBox(String error) async {
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            elevation: 30,
            content: Container(
              height: 60,
              alignment: Alignment.center,
              child: Text(
                error,
                style: TextStyle(color: Colors.black, fontSize: 22),
              ),
            ),
            actions: [
              GestureDetector(
                onTap: () {
                  Navigator.pop(context);
                },
                child: Container(
                    height: 20,
                    width: 50,
                    margin: EdgeInsets.symmetric(horizontal: 5, vertical: 5),
                    alignment: Alignment.centerRight,
                    child: const Text(
                      "Close",
                      style: TextStyle(color: Colors.blue, fontSize: 20),
                    )),
              ),
            ],
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            resizeToAvoidBottomInset: true,
            body: SingleChildScrollView(
                scrollDirection: Axis.vertical,
                child: Container(
                  height: MediaQuery.of(context).size.height - 50,
                  child: Column(children: [
                    Expanded(
                        flex: 2,
                        child: Container(
                          decoration: BoxDecoration(
                            color: Colors.blue.shade50,
                            image: DecorationImage(
                                image: NetworkImage(
                                    "https://images.pexels.com/photos/629167/pexels-photo-629167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
                                fit: BoxFit.fill),
                          ),
                        )),
                    Expanded(
                        flex: 3,
                        child: Container(
                            color: Colors.white,
                            child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceEvenly,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Container(
                                    decoration: const BoxDecoration(
                                      border: Border(
                                          bottom: BorderSide(
                                              width: 0.1,
                                              color: Colors.black12)),
                                    ),
                                    margin: EdgeInsets.symmetric(horizontal: 5),
                                    child: Padding(
                                      padding: const EdgeInsets.only(
                                          left: 30,
                                          right: 30,
                                          top: 30,
                                          bottom: 30),
                                      child: Container(
                                        height: 36,
                                        margin: const EdgeInsets.symmetric(
                                            horizontal: 8),
                                        alignment: Alignment.center,
                                        child: Text(
                                          "Sign in your account",
                                          style: TextStyle(
                                              fontSize: 28,
                                              fontWeight: FontWeight.w700,
                                              color: Color.fromARGB(
                                                  255, 145, 9, 183)),
                                        ),
                                      ),
                                    ),
                                  ),
                                  Container(),
                                  Padding(
                                    padding: const EdgeInsets.only(
                                        top: 20.0, left: 500),
                                    child: Row(
                                      children: const [
                                        Text(
                                          "User Id",
                                          style: TextStyle(
                                            fontSize: 16,
                                            fontWeight: FontWeight.w400,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(
                                        top: 4, left: 500, right: 500),
                                    child: Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      crossAxisAlignment:
                                          CrossAxisAlignment.center,
                                      children: [
                                        Expanded(
                                          flex: 3,
                                          child: Container(
                                            height: 28,
                                            margin:
                                                const EdgeInsets.only(top: 4),
                                            alignment: Alignment.centerRight,
                                            child: TextFormField(
                                              onChanged: (value) {
                                                givenUserId = value.toString();
                                              },
                                              decoration: InputDecoration(
                                                hintText: "Enter Username",
                                                errorMaxLines: 1,
                                                hintStyle: const TextStyle(
                                                  fontSize: 16,
                                                  fontWeight: FontWeight.w400,
                                                  fontStyle: FontStyle.italic,
                                                  color: Colors.grey,
                                                ),
                                                enabledBorder:
                                                    UnderlineInputBorder(
                                                  borderSide: BorderSide(
                                                      width: 1,
                                                      color:
                                                          Colors.grey.shade400),
                                                ),
                                              ),
                                              style: const TextStyle(
                                                  fontSize: 16,
                                                  fontWeight: FontWeight.w200,
                                                  color: Colors.black),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(
                                        top: 20.0, left: 500),
                                    child: Row(
                                      children: const [
                                        Text(
                                          "Password ",
                                          style: TextStyle(
                                            fontSize: 16,
                                            fontWeight: FontWeight.w400,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(
                                        top: 4, left: 500, right: 500),
                                    child: Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      crossAxisAlignment:
                                          CrossAxisAlignment.center,
                                      children: [
                                        Expanded(
                                          flex: 3,
                                          child: Container(
                                            height: 28,
                                            margin:
                                                const EdgeInsets.only(top: 4),
                                            alignment: Alignment.centerRight,
                                            child: TextFormField(
                                              onChanged: (value) {
                                                givenPassword =
                                                    value.toString();
                                              },
                                              decoration: InputDecoration(
                                                hintText: "Enter Password",
                                                errorMaxLines: 1,
                                                hintStyle: const TextStyle(
                                                  fontSize: 16,
                                                  fontWeight: FontWeight.w400,
                                                  fontStyle: FontStyle.italic,
                                                  color: Colors.grey,
                                                ),
                                                enabledBorder:
                                                    UnderlineInputBorder(
                                                  borderSide: BorderSide(
                                                      width: 1,
                                                      color:
                                                          Colors.grey.shade400),
                                                ),
                                              ),
                                              style: const TextStyle(
                                                  fontSize: 16,
                                                  fontWeight: FontWeight.w200,
                                                  color: Colors.black),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                  )
                                ]))),
                    Expanded(
                        flex: 0,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            GestureDetector(
                              onTap: () {
                                if (userId == givenUserId) {
                                  if (password == givenPassword) {
                                    Navigator.of(context)
                                        .push(MaterialPageRoute(
                                            builder: (context) => dashboard(
                                                  title: 'dashboard',
                                                )));
                                  } else {
                                    _alertDialogBox(
                                        "Username and Password Doesn't Match");
                                  }
                                } else {
                                  _alertDialogBox("Enter Correct UserId");
                                }
                              },
                              child: Container(
                                margin: EdgeInsets.symmetric(
                                    horizontal: 600, vertical: 60),
                                height: 40,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(16),
                                  color: Colors.blue.shade500,
                                ),
                                alignment: Alignment.center,
                                child: Text(
                                  "Login",
                                  style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 18,
                                      fontWeight: FontWeight.w500),
                                ),
                              ),
                            )
                          ],
                        )),
                  ]),
                ))));
  }
}

class LoginSucess extends StatefulWidget {
  const LoginSucess({Key? key}) : super(key: key);

  @override
  State<LoginSucess> createState() => _LoginSucessState();
}

class _LoginSucessState extends State<LoginSucess> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      body: Column(
        children: [
          Expanded(
            flex: 3,
            child: Container(
              decoration: BoxDecoration(
                color: Colors.blue.shade50,
                image: DecorationImage(
                    image: NetworkImage(
                        "data:image/jpeg;base64,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"),
                    fit: BoxFit.fill),
              ),
            ),
          ),
          Expanded(
            flex: 2,
            child: Container(
              decoration: const BoxDecoration(
                border:
                    Border(bottom: BorderSide(width: 1, color: Colors.black12)),
              ),
              margin: EdgeInsets.symmetric(horizontal: 16),
              child: Padding(
                padding: const EdgeInsets.only(
                    left: 16, right: 16, top: 16, bottom: 16),
                child: Container(
                  height: 36,
                  margin: const EdgeInsets.symmetric(horizontal: 8),
                  alignment: Alignment.center,
                  child: Text(
                    "Successfully Logged In",
                    style: TextStyle(
                        fontSize: 28,
                        fontWeight: FontWeight.w700,
                        color: Colors.blue.shade900),
                  ),
                ),
              ),
            ),
          )
        ],
      ),
    ));
  }
}
