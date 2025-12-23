# Deployment Guide

## Using Same MongoDB Cluster for Multiple Projects

You can use the **same MongoDB Atlas cluster** for multiple projects by creating **different databases** within that cluster.

### Step 1: Update MongoDB Connection String

Your existing MongoDB Atlas connection string looks like:
```
mongodb+srv://username:password@cluster.mongodb.net/userAuthDB?retryWrites=true&w=majority
```

For this Student Record project, just change the **database name**:
```
mongodb+srv://username:password@cluster.mongodb.net/studentDB?retryWrites=true&w=majority
```

**Notice:** Only the database name changed from `userAuthDB` to `studentDB`

This creates a **separate database** in the same cluster - completely free!

---

## Deploy Backend on Render

### Step 1: Push to GitHub
✅ Already done!

### Step 2: Create New Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `student-record-management`
4. Configure:
   - **Name:** `student-record-api` (or any name)
   - **Region:** Choose closest to you
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`

### Step 3: Add Environment Variables

In Render dashboard, go to **Environment** tab and add:

**Key:** `MONGO_URI`  
**Value:** `mongodb+srv://username:password@cluster.mongodb.net/studentDB?retryWrites=true&w=majority`

(Replace with your actual MongoDB Atlas credentials - use the SAME cluster, just different database name)

### Step 4: Deploy

Click **"Create Web Service"** - Render will automatically deploy!

Your backend API will be live at: `https://student-record-api.onrender.com`

---

## Deploy Frontend on Netlify

### Step 1: Update API URLs in Frontend

Before deploying frontend, you need to update the API URLs from `localhost:3000` to your Render backend URL.

In both `add-student.html` and `students.html`, replace:
```javascript
http://localhost:3000/api/v1/students
```

With:
```javascript
https://student-record-api.onrender.com/api/v1/students
```

(Use your actual Render URL)

### Step 2: Deploy to Netlify

**Option A: Drag & Drop**
1. Go to [Netlify](https://app.netlify.com/)
2. Drag the `frontend` folder to Netlify drop zone
3. Done!

**Option B: GitHub (Recommended)**
1. Go to Netlify Dashboard
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect GitHub → Select `student-record-management` repo
4. Configure:
   - **Base directory:** `frontend`
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (dot)
5. Click **"Deploy"**

Your frontend will be live at: `https://your-site-name.netlify.app`

---

## Summary

✅ **Same MongoDB Cluster** - Just use different database names:
- User Auth Project: `userAuthDB`
- Student Record Project: `studentDB`

✅ **Backend:** Deploy on Render (Free)
✅ **Frontend:** Deploy on Netlify (Free)
✅ **Database:** MongoDB Atlas Free Tier (supports multiple databases)

**Total Cost:** $0 🎉

---

## Important Notes

1. **Free tier limitations:**
   - Render free tier sleeps after 15 minutes of inactivity
   - First request after sleep takes ~30 seconds to wake up

2. **CORS:** Already configured in `server.js` with `cors()` middleware

3. **Database names:** Make sure to use different database names for each project in the same cluster

---

Created by Sharansh Jha
