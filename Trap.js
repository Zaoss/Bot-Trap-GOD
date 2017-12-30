import discord
import asyncio
import random
import requests
import io


client = discord.Client ()

@client.event
async def on_ready () :
 print('BOT ONLINE - Olá Mundo!')
 print(client.user.name)
 print(client.user.id)
 print('-------PR--------')

@client.event
async def on_message (message) :
    if message.content.lower().startswith('?test') :
        await client.send_message(message.channel, "Olá mundo, estou vivo.")
    if message.content.startswith('?ass'):
        response = requests.get("https://pa1.narvii.com/6556/94b3e4497ae2f42940e5d4da6e6d5d5a22b0d699_hq.gif", stream=True)
        await client.send_file(message.channel, io.BytesIO(response.raw.read()), filename='bild.gif', content='Fapfapfap.')




client.run('Mzk2NzYwMTE0NTg2OTc2MjU2.DSmHeg.GmgpPHb-laDqyzM2zi7tCrfHiqQ')



