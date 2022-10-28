# Contact Card

![](2022-10-28-09-15-09.png)

## Description
You can use the contact card for integrating contact information into your site. The contact card is a component that can be used in different ways. You can use it to display contact information for a person or a team. You can also use it to display contact information for a company or a department.


## Connectors
The contact card uses the following connectors:
### Office365Users
PowerApps Office365Users connector can be used to retrieve information about users in your Office 365 tenant. The connector can be used to retrieve information about users, groups, and roles. The connector can also be used to retrieve information about the current user.

### Office365Outlook
PowerApps Office365Outlook connector can be used to retrieve information about your Office 365 Outlook account. The connector can be used to retrieve information about your calendar, contacts, and mail.

## Use Cases
### Show Multiple contacts from a list item
You have a field with multiple contacts on a list item. You want to display the contact information for each contact.


Here we find contacts based on a selection in a Gallery.

```javascript title="Bottom - DisplayMode"
// This code is controlling the state of the "Show Contact" button
If(CountRows(GalleryItems.Selected.Contacts)>0 ,DisplayMode.Edit,DisplayMode.Disabled)
```

```javascript title="Bottom - OnSelect"

```
