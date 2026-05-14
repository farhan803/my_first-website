student = {
    
}

while True:
    print("\n----student manager-----")
    print("1.add student")
    print("2.viwe student")
    print("3.result check")
    print("4.exit")
    
    choice = input("Enter a choice: ")
    
    if choice == "1":
        name = input( "enter a name :")
        mark = int(input("enter a marks:"))
        student[name]= mark
        print(f"{name} successfully added!")
    
    elif choice== "2":
        if not student :
            print("no student faound")
        else :
            for name ,mark in student.items():
                print(name , ":",mark)
    elif choice == "3":
        name = input("enter a name : ")
        
        if name in student:
            mark = student[name ]
            if mark>= 33 :
                print("pass")
            else:
                print("fail")
        else:
            print("student not faound")
    elif choice =="4":
        print("god by...")
        break
    else:
        print("invalide")