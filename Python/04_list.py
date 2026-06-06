# marks = [89, 45, 33,76.0]
# print(marks)
# print(type(marks))
# print(marks[1])


#---LIST------


# student = ["khushi" , 56.0 , "delhi"]
# print(student)
# student[0] = "aditi"
# print(student)


marks1 = [45, 67 ,89 ,76,90]
# marks1.append(0)   # add 0 into last
# marks1.insert(0,60)  # index = "0" and no is = 60
# marks1.sort()
# marks1.remove(45)
# print(marks1)

#--------TUPLE--------

tup = (34,89, 0,67 ,89,0)
# tup.index(34)
# print(tup.count(0))    #---tup m "0"kitne bar h
# print(tup.index(34))   # 34 kon s index p h

#----- list Method -----


list1 = [1,3,1]
list2  =[1,3,1]

copy_list1 = list1.copy()
copy_list1.reverse()
if(copy_list1 == list1):
    print("palindrome")


#------NOTES-------
# string ---> inmutable
# tuple ----> mutable
# list ----> mutable ( can change value )
#  list.append(4) ---> append  ----> add one element into  last
# list.sort() --> sort in accending order
# list.sort(reverse=True) ---> sort in deccending order
