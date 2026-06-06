# class Car:
#     color = "blue"
#     brand = "mercedes"

# Car1 = Car()
# print(Car1.color)
# print(Car1.brand)

#----constructer-----

#class Student:
college_name = " ABC college"
name = "anonymous"    # --> class attribute
 
 #---defoult constructer-----

#     def __init__(self):
#        pass

#     #-----parametrized constructer-----
  
#     def __init__(self , name, marks):
#      self.name = name   #  prefrence  (obj attribute) > (class attribute)
#      self.marks = marks

#      print("adding new  student in database")

# s1 = Student("khushi")
# print(s1.name)

# s2 = Student("sweta")
# print(s2.name,s2.marks)

#----abstract (show only essential feature only to user)----
class Car:
    
 def __init__(self):
      self.acc = False
      self.brk = False
      self.clutch = False
 
 def start(self):
   self.acc = True
   self.clutch = True
   print("car started..")
        
car1 = Car ()
car1.start()


#-----encapsulation (wrapping data and function into a single unit (obj)) ---
      
class Account:
   def __init__(self,bal,acc):
      self.balance = bal
      self.account_no = acc

   def debit(self,amount):
         self.balance -= amount
         print("Rs.",amount ,"was debited")
         print("total balance =" ,self.get_balance())

   def credit(self,amount):
         self.balance += amount
         print("Rs.", amount ,"was credited")
         print("total balance =" ,self.get_balance())
      
   def get_balance(self):
         return self.balance
      
acc1 = Account(100000,12345)
acc1.debit(1000)
acc1.credit(500)
