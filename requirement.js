`
Main Requirements

1.  Focus on making the website visually appealing. Ensure that  --- done

3.  Your website should have a navbar with the Website logo, Website name, Home, All cars, My cars, Add A car, Blogs, and User profile picture.
Note: The User profile picture, Add A car and My cars on the navbar are conditional based on login. If the user is logged in, the navbar will show the profile picture; otherwise, it will show the Login button. If the username is available, the user's name will be visible when the mouse hovers over the profile picture.


4.  Login & Registration systems: On the Registration and Login pages, display relevant error messages when necessary.    -- done 


5.   Home page:

Banner section -A slider/banner/ a meaningful section. -- done 

Gallery Section - Show relevant pictures. Try to make it attractive.

Shop by category- Implement a tab system for Shop by category section. Explore React-tabs, or you can implement this using custom CSS. There will be 3 tabs, each containing sub-categories of the category you have chosen.


For example, if the website is based on Educational and learning cars, the sub-categories for the 3 tabs can be Math cars, Language cars, engineering cars, and Science cars, etc.. You need at least 3 sub-categories.


Each tab will have minimum 2 cars, and each car will have the following information:

Picture,
Name,
Price,
Rating and
View Details button.

Note: When a user is not logged in and if he/ she clicks on the View Details button, notify the user with a message “You have to log in first to view details” by using a toast/ notification/ anything. Also, redirect him/ her to the login page. Without a login, you can not visit the single car details page.

Extra Section: Add two relevant sections. Try to make them attractive.

6.   Blogs page: Create a Blog where you will have to answer the following questions:  -- done 


7.   All cars page: Create an All cars page where you will see the cars all the users have added in the tabular form. Each row of the All cars table/list will have the following information:

Seller: (if available) show the name of the person who posted the car
car Name
Sub-category
Price
Available Quantity
View Details button

Show 20 results by default by using limit

Implement a search system on this page, based on the car name.


Without logging in, if a user clicks on the View Details button, they will be redirected to the Login Page. Make sure to take the user to the Details Page after the user successfully logs in.


8.  Single car details route will be a private route:

After clicking on the View Details button, he/ she will be redirected to the cars Details route ( /car/:id ) containing the information ( picture, car name, seller name, seller email, price, rating, available quantity, and detail description)

(optional) If possible, display the view details in a modal


9.   Add A car page will be a private route:

Create an Add A car page where there will be a form having the following fields:

Picture URL of the car,
Name,
seller name (if available from the logged in user)
seller email (info from the logged in user)
Sub-category ( For example: if the website is based on Educational and learning cars, the sub-categories can be Math cars, Language cars, and Science cars.)
Price,
Rating,
Available quantity
Detail description

10.  My cars page will be private routes: If a user logs in, they will see the My cars page, which it will show all the cars information they have added from the Add A car page in a tabular form. Each row will have an update and delete button.

Update Action - If they click the update button, they can update the car information (Price, available quantity, Detail description)

Note: you can show the update form in a modal or another route.


Delete Action - If they click the delete button, the car will be removed from the list. Before the delete, ask for a delete confirmation.


> **Note:** If a user logs in they will only see the cars they have added. The user cannot see the cars other users added.

11.  For all the CRUD operations, show relevant toast/ notification/ anything with a meaningful message

12.  404 page: -- done 

13.  Use the Environment variable to hide the Firebase config keys and Mongodb credentials.



-------------------------------------------------->

Bonus Requirements
Commits & readme:

Minimum 18 meaningful git commits on the client-side repository.
Minimum 8 meaningful commits on the server-side repository.
Create a readme for client-side and write about your project (at least 5 bullet points). ** Remember to add your client-side live link to your website here.**

Reload: If you reload the protected/private routes (after login), this page will not redirect the user to the login page. Instead, it will keep the logged-in user on the protected route.

Make Home page of your website mobile & desktop responsive (tablet responsive is optional)


Use the AOS Package in the home page. At least in one place on the home page. Using AOS on other pages is optional.

On the My cars page, you must implement a sorting system to sort the cars in descending and ascending orders based on the price. (Explore MongoDB sorting operation & implement it on the backend). The design of the sorting system depends on you.

Give your website name. The website title will be changed according to the route you are clicking. Suppose your website name is PHero. Then, on the ‘about’ route, your website title will be ‘PHero | About us’.

Make the component name, folder structure, and route name meaningful. If needed, add comments.


car
truck
bus
van
Ambulance
Police car
`