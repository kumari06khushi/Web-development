
#----dictionary---

# info = {
#     "key" : "value",
#     "name": "khushi",
#     "roll no" : 78,
#     "adult": True,
#     "sub": ["maths" , "english"]
# }

student ={      
    "name" :"ram",
    "sub":{"phy": 90,
           "chem":89,
            "maths": 90
              }
}


#  print(info)
# print(info["name"])

# print(student.keys())
# print(list(student.keys()))   #--->  give onely  key value

print(list(student.values())) 

# print(list(student.items()))  #--> return all "key" and "value" ,add list that conver student into list


# print(student["name2"])  #--> error
# print(student.get("name2")) #---> none print
# print("hii")
student.update({"city" : "delhi"})
print(student)
     # OR
new_dict = {"city" : "delhi"}
student.update(new_dict)
print(student)



#-----NOTES----
# dictionary -----> mutable
