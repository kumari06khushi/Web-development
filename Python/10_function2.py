
# num = int(input("enter your no = "))


# def check(num): 
#     if(num%2==0):
#         print("num is even")
#     else:
#         print("num is odd")
# check(num)  


#-----RECUSION-----

#n = int(input("enter your no = "))

# def show(n):
#     if(n==0):
#         return
#     print(n)
#     show(n-1)  #function call  --> recursion m sara khela function call k h hme jo v value  chahiye waisa call krna padega
#     show(n)

def print_list(list,idx=0):
    if(idx==len(list)):
        return
    print(list[idx])
    print_list(list,idx+1)

fruits = ["mango","lichhi","apple"]

print_list(fruits)



 #----notes-----#

    #  in recursion base-case is very imp!
