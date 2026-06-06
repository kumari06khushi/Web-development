#  ---- read---#


# f = open(r"C:\Users\HP\Desktop\Python\khushi\demo.txt","r")

# data = f.read()
# print(data)
# print(type(data))
# f.close()

# line1 = f.readline()
# print(line1)
# f.close()

#-----second is write-----#


# f = open(r"C:\Users\HP\Desktop\Python\khushi\write.txt","a")
# f.write("\n I have complete  python" )

# f.close()


#  ---- with syntax---#

# with open(r"C:\Users\HP\Desktop\Python\khushi\demo.txt","r") as f:
#  data = f.read()
# print(data)


#  ---- deleting a file---#

# import os
# os.remove(r"C:\Users\HP\Desktop\Python\khushi\sample.txt")

#----practice question----#

# -----replace qus ---

# with open(r"C:\Users\HP\Desktop\Python\khushi\demo.txt","r") as f:
#  data = f.read()

#  new_data = data.replace("java","python")
# print(new_data)

# with open(r"C:\Users\HP\Desktop\Python\khushi\demo.txt","w") as f:
#   f.write(new_data)

#----searcing qus--#

word = "like"
with open(r"C:\Users\HP\Desktop\Python\khushi\demo.txt","r") as f:
   data = f.read()
if(data.find(word) != -1):
    print("found")
else:
   print("not found")













#-------CLASS-NOTES---------#


# writing to a file

# 1. "w" --> write/overwrite
# 2. "a" --> append (add at the end)

#  "r+"  read + overwrite (ptr start) --> no truncate
#  "w+"  read + overwrite (ptr start) --> truncate
#  "a+"  read  + appent  (pte end)    --> no truncate

#  "a(alis)"  ---> same things with other name.
# with syntax automatic close file ,no need to write f.close()

# if we want to create file ,we should open in write mode
