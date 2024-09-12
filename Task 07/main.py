import glob
import os
import hashlib
import click
import requests
from bs4 import BeautifulSoup
@click.command()
@click.option('-l', '--language', default=None, help='Filter subtitles by language (e.g. englihs, spanish).')
@click.option('-o', '--output', default='.', type=click.Path(), help='Output folder for the subtitles.')
@click.option('-s', '--file-size', type=int, help='Filter subtitles by movie file size.')
@click.option('-h', '--match-by-hash', is_flag=True, help='Match subtitles by movie hash.')
@click.option('-b', '--batch-download', is_flag=True, help='Enable batch mode to download subtitles for all movies in a directory.')
@click.argument('mp4_file', type=click.Path(exists=True))
def get_subtitles(language, output, file_size, match_by_hash, batch_download, mp4_file):
    click.echo(f"Processing file: {mp4_file}")
    click.echo(f"Language: {language}, Output Folder: {output}, File Size: {file_size}, Match by Hash: {match_by_hash}, Batch Download: {batch_download}")




def calculate_file_hash(file_path):
    hasher = hashlib.md5()
    with open(file_path, 'rb') as f:
        buf = f.read(4096)
        while len(buf) > 0:
            hasher.update(buf)
            buf = f.read(4096)
    return hasher.hexdigest()

def extract_imdb_id(file_path):
    filename = file_path.split('/')[-1]
    parts = filename.split('_')
    for part in parts:
        if part.isdigit() and len(part) == 7:
            return part
    return None  




import requests
from bs4 import BeautifulSoup

def scrape_subtitles(imdb_id, language=None):
    url = f"https://www.opensubtitles.org/en/search2/sublanguageid-{language}/imdbid-{imdb_id}" if language else f"https://www.opensubtitles.org/en/search2/imdbid-{imdb_id}"
    
    
    response = requests.get(url)
    
    if response.status_code != 200:
        click.echo("Failed to fetch subtitles. Please try again.")
        return []
    
    
    soup = BeautifulSoup(response.content, 'html.parser')
    
    
    subtitles = []
    for result in soup.select('.bnone'): 
	title = result.text
        link = result.get('href')
        download_url = f"https://www.opensubtitles.org{link}"
        subtitles.append({"title": title, "url": download_url})
    
    return subtitles


@click.command()
@click.option('-l', '--language', default=None, help='Filter subtitles by language (e.g. eng, spa).')
@click.option('-o', '--output', default='.', type=click.Path(), help='Output folder for the subtitles.')
@click.option('-s', '--file-size', type=int, help='Filter subtitles by movie file size.')
@click.option('-h', '--match-by-hash', is_flag=True, help='Match subtitles by movie hash.')
@click.option('-b', '--batch-download', is_flag=True, help='Enable batch mode to download subtitles for all movies in a directory.')
@click.argument('mp4_file', type=click.Path(exists=True))
def get_subtitles(language, output, file_size, match_by_hash, batch_download, mp4_file):
    if match_by_hash:
        movie_hash = calculate_file_hash(mp4_file)
        click.echo(f"Movie Hash: {movie_hash}")
    
    imdb_id = extract_imdb_id(mp4_file)
    if not imdb_id:
        click.echo("No IMDb ID found in the filename.")
        return

   
    subtitles = scrape_subtitles(imdb_id, language)

    if not subtitles:
        click.echo("No subtitles found.")
        return





def get_subtitles_batch(directory, language, output, match_by_hash):

    mp4_files = glob.glob(os.path.join(directory, '*.mp4'))
    
    for mp4_file in mp4_files:
        click.echo(f"Processing file: {mp4_file}")
        get_subtitles(language, output, None, match_by_hash, False, mp4_file)

   
    click.echo("Available subtitles:")
    for i, subtitle in enumerate(subtitles):
        click.echo(f"{i + 1}. {subtitle['title']}")
    
   
    choice = click.prompt("Enter the number of the subtitle to download", type=int)
    
    if choice < 1 or choice > len(subtitles):
        click.echo("Invalid choice.")
        return
    
    selected_subtitle = subtitles[choice - 1]
    download_subtitle(selected_subtitle['url'], output)

def download_subtitle(subtitle_url, output_folder):

    response = requests.get(subtitle_url)
    
    if response.status_code == 200:

        filename = subtitle_url.split('/')[-1] + ".srt"
        output_path = os.path.join(output_folder, filename)
        

        with open(output_path, 'wb') as f:
            f.write(response.content)
        
        click.echo(f"Subtitle downloaded: {output_path}")
    else:
        click.echo("Failed to download the subtitle.")



@click.command()
@click.option('-l', '--language', default=None, help='Filter subtitles by language (e.g. eng, spa).')
@click.option('-o', '--output', default='.', type=click.Path(), help='Output folder for the subtitles.')
@click.option('-s', '--file-size', type=int, help='Filter subtitles by movie file size.')
@click.option('-h', '--match-by-hash', is_flag=True, help='Match subtitles by movie hash.')
@click.option('-b', '--batch-download', is_flag=True, help='Enable batch mode to download subtitles for all movies in a directory.')
@click.argument('mp4_file', type=click.Path(exists=True))
def get_subtitles(language, output, file_size, match_by_hash, batch_download, mp4_file):
    if batch_download:
        get_subtitles_batch(mp4_file, language, output, match_by_hash)
    else:

