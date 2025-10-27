# GoDaddy Deployment Guide

This guide will walk you through deploying your Branch UMG Mortgage website to GoDaddy hosting.

## Prerequisites

- An active GoDaddy hosting account (Shared, VPS, or Dedicated)
- Your domain connected to your hosting
- Access to GoDaddy cPanel or FTP credentials

## Step-by-Step Deployment

### Step 1: Build Your Website

Before deploying, you need to create a production build of your website:

```bash
# Navigate to your project directory
cd branch-umg-mortgage

# Install dependencies (if not already done)
npm install

# Create production build
npm run build
```

This will create a `dist` folder containing all the optimized files ready for deployment.

### Step 2: Access Your GoDaddy Hosting

#### Method A: cPanel File Manager (Easiest)

1. Log in to your GoDaddy account at https://godaddy.com
2. Navigate to **My Products**
3. Find your hosting plan and click **Manage**
4. Click on **cPanel Admin** button
5. In cPanel, find and click **File Manager**

#### Method B: FTP Client (FileZilla)

1. Download and install FileZilla (https://filezilla-project.org/)
2. Get your FTP credentials from GoDaddy:
   - In cPanel, go to **FTP Accounts**
   - Create an FTP account or use existing credentials
3. Connect FileZilla using:
   - Host: ftp.yourdomain.com (or your server IP)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

### Step 3: Upload Your Files

#### Using cPanel File Manager:

1. Navigate to `public_html` folder
   - If your domain points to a subfolder, navigate there instead
   
2. **Clean existing files** (if this is a new deployment):
   - Select all existing files
   - Click **Delete**
   - Confirm deletion

3. **Upload your build files**:
   - Click **Upload** button
   - Drag and drop all files from your local `dist` folder
   - Or use **Select File** to browse and upload
   - Wait for upload to complete (you'll see a progress bar)

4. **Extract if using a zip file**:
   - Alternatively, you can zip your `dist` folder contents
   - Upload the zip file
   - Right-click the zip file and select **Extract**

#### Using FTP (FileZilla):

1. Connect to your server using FileZilla
2. Navigate to `public_html` in the remote site panel (right side)
3. Navigate to your `dist` folder in the local site panel (left side)
4. Select all files in the `dist` folder
5. Drag and drop them to the `public_html` folder
6. Wait for transfer to complete

### Step 4: Configure for Single Page Application

Since this is a React SPA (Single Page Application), you need to configure the server to handle routing correctly.

1. **Create a .htaccess file** in your `public_html` folder:

#### Using cPanel File Manager:
   - In `public_html`, click **+ File** button
   - Name it `.htaccess`
   - Right-click the file and select **Edit**
   - Add the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  
  # Rewrite everything else to index.html to allow html5 state links
  RewriteRule ^ index.html [L]
</IfModule>

# Enable Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/x-javascript "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresDefault "access plus 2 days"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

   - Save the file

#### Using FTP:
   - Create a new file locally named `.htaccess`
   - Add the content above
   - Upload it to `public_html`

### Step 5: Verify Your Deployment

1. Open your browser
2. Visit your domain (e.g., https://yourdomain.com)
3. Test the following:
   - ✅ Homepage loads correctly
   - ✅ All images display properly
   - ✅ Navigation works
   - ✅ Animations play smoothly
   - ✅ Mobile responsiveness
   - ✅ Forms work (if applicable)
   - ✅ All links function correctly

### Step 6: Enable SSL (HTTPS)

If not already enabled:

1. In GoDaddy cPanel, find **SSL/TLS Status**
2. Enable SSL for your domain
3. Or use **Let's Encrypt** (free):
   - In cPanel, search for "SSL"
   - Click on **SSL/TLS Status**
   - Run AutoSSL to generate free certificate

4. Force HTTPS by adding to the top of your `.htaccess`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Troubleshooting

### White Screen or Blank Page

**Cause:** Incorrect base URL or file paths

**Solution:**
1. Check that all files are in `public_html` root, not a subfolder
2. Verify `.htaccess` is configured correctly
3. Check browser console for errors (F12)

### 404 Errors on Page Refresh

**Cause:** Missing or incorrect `.htaccess` configuration

**Solution:**
1. Ensure `.htaccess` file exists in `public_html`
2. Verify the rewrite rules are correct (see Step 4)
3. Check that `mod_rewrite` is enabled (contact GoDaddy if needed)

### Images Not Loading

**Cause:** Incorrect file paths or missing files

**Solution:**
1. Verify all files from `dist` folder were uploaded
2. Check that the `assets` folder uploaded correctly
3. Clear browser cache and hard refresh (Ctrl+F5)

### Slow Loading Speed

**Solution:**
1. Ensure Gzip compression is enabled (in `.htaccess`)
2. Enable browser caching (in `.htaccess`)
3. Consider using GoDaddy CDN if available

### File Upload Issues

**Solution:**
1. If files are too large, zip them and upload the zip
2. Extract the zip in cPanel File Manager
3. Check file upload limits in cPanel PHP settings

## Updating Your Website

When you make changes to your website:

1. Make changes locally
2. Test thoroughly (`npm run dev`)
3. Create new build (`npm run build`)
4. Delete old files in `public_html` (except .htaccess)
5. Upload new files from `dist` folder
6. Clear browser cache and test

## Performance Optimization

1. **Enable Caching:** Already included in `.htaccess`
2. **Optimize Images:** Compress images before deploying
3. **CDN:** Consider GoDaddy's CDN service
4. **PHP Version:** Use PHP 8.0+ for better performance
5. **Resource Limits:** Upgrade hosting if needed

## Support

If you encounter issues:

1. **GoDaddy Support:**
   - Phone: 1-480-505-8877
   - Live Chat: Available in your account
   - Help Center: https://www.godaddy.com/help

2. **Check Error Logs:**
   - In cPanel, go to **Metrics** → **Errors**
   - Review error logs for specific issues

3. **Community Forums:**
   - GoDaddy Community: https://community.godaddy.com/

## Checklist

Before going live, ensure:

- [ ] All files uploaded successfully
- [ ] `.htaccess` file configured
- [ ] SSL certificate installed and active
- [ ] Domain points to correct hosting
- [ ] All pages load correctly
- [ ] Mobile responsiveness verified
- [ ] Contact forms tested (if applicable)
- [ ] Legal disclaimers updated
- [ ] NMLS information accurate
- [ ] Privacy policy and terms in place
- [ ] Google Analytics installed (optional)
- [ ] Favicon displays correctly

---

**Congratulations!** Your Branch UMG Mortgage website should now be live on GoDaddy! 🎉
