![](/Users/arrianneoshea/Desktop/Random screen shots/Screen Shot 2017-04-25 at 08.37.46.png)


This application was created using Rails and Angular. It utilises Adobe Illustrator (for the icon design), Google Maps API, CityMapper and iCal.
From my previous work with diabetic patients, I decided to focus my final project on the ever growing need for diabetic appointment planning.


>*The cost of diabetes to the NHS is over £1.5m an hour or 10% of the NHS budget for England and Wales. This equates to over £25,000 being spent on diabetes every minute.
> In total, an estimated £14 billion pounds is spent a year on treating diabetes and its complications, with the cost of treating complications representing the much higher cost.
>The prevalence of diabetes is estimated to rise to 4 million by 2025.



 This simple icon based application can help patients keep on top of appointments thus reducing the risk of further complications and cost to the NHS.
 
 Below is some wireframing that I started with in order to figure out how I wanted to tackle the issue of missed appointments with my app.
 
 ![](/Users/arrianneoshea/Desktop/Screen Shot 2017-05-16 at 10.59.17.png)
 
 
 Diabetes UK state there are 15 healthcare essentials that diabetic patients need to follow so I broke those down into 8 (combining appointments that more than likely happen at the same time) icons.
 
![](/Users/arrianneoshea/Desktop/Random screen shots/Screen Shot 2017-04-21 at 16.06.20.png)

I created them in Adobe illustrator and tried to make them as simple as possible but still easy enough for the user to know what the appointment was about.

As the user logs in, they are presented with their profile. This is just a place for them to store useful information such as GP address and any medication they might be on. This could prove usefull when they need to recall this information at future appointments.

![](/Users/arrianneoshea/Desktop/Screen Shot 2017-05-16 at 09.39.35.png)

From the nav bar, the user can then choose to add a new appointment. 

![](/Users/arrianneoshea/Desktop/Screen Shot 2017-05-16 at 09.42.27.png)

I added an autocomplete for the location of the appointment to make things a bit easier, especially if you only know the name of a particular hospital but not the address. The user can then provide any other useful information and then choose one or more icons that are associated with that appointment.

The user can then view upcoming appointments or any past appointments after I wrote a date function that places appointments in different show pages depending on how they compare with the present date and time.

I decided to utilise the Google Maps api to allow users to visualise where they are going. They can then go on to view directions from City Mapper.

![](/Users/arrianneoshea/Desktop/Screen Shot 2017-05-16 at 09.40.23.png)

Most importantly, users can add these appointments to their own person calendars, ensuring that they keep on top of these appointments. I would really like to add notifications from this app in the future once a certain amount of time has passed between appointments. A lot of diabetic appointments must happen at least annually, so reminding the patient to book them if they already haven't would be essential and beneficial to their future care.

